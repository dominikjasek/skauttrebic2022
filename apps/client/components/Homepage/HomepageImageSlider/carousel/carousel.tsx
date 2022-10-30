import {
  animate,
  AnimationOptions,
  PanInfo,
  useMotionValue,
} from 'framer-motion'

import { CarouselProps } from './types'
import Arrow from './arrow'
import Slider from './slider'
import Dots from './dots'
import { Children, CSSProperties, forwardRef, ReactNode, useEffect, useRef, useState } from 'react'

const containerStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
}

const transition: AnimationOptions<any> = {
  type: 'spring',
  bounce: 0,
}

const Contaier = forwardRef<
    HTMLDivElement,
    { children: ReactNode }
>((props, ref) => (
  <div ref={ref} style={containerStyle}>
    {props.children}
  </div>
))
Contaier.displayName = 'Contaier'

export const Carousel = ({
  children,
  renderArrowLeft,
  renderArrowRight,
  renderDots,
  autoPlay = true,
  interval = 2000,
  loop = true,
}: CarouselProps) => {
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const calculateNewX = () =>
    -index * (containerRef.current?.clientWidth || 0)

  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0

    const { offset } = dragProps

    if (offset.x > clientWidth / 4) {
      handlePrev()
    } else if (offset.x < -clientWidth / 4) {
      handleNext()
    } else {
      animate(x, calculateNewX(), transition)
    }
  }

  const childrens = Children.toArray(children)

  const handleNext = () => {
    const idx = loop ? 0 : index
    setIndex(index + 1 === childrens.length ? idx : index + 1)
  }

  const handlePrev = () => {
    const idx = loop ? childrens.length - 1 : 0
    setIndex(index - 1 < 0 ? idx : index - 1)
  }

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition)
    return controls.stop
  }, [index])

  useEffect(() => {
    if (!autoPlay) {
      return
    }
    const timer = setInterval(() => handleNext(), interval)
    return () => clearInterval(timer)
  }, [handleNext, interval])

  return (
    <Contaier ref={containerRef}>
      {childrens.map((child, i) => (
        <Slider onDragEnd={handleEndDrag} x={x} i={i} key={i}>
          {child}
        </Slider>
      ))}
      {/* left arrow */}
      {renderArrowLeft ? (
        renderArrowLeft({ handlePrev, activeIndex: index })
      ) : (
        <Arrow left onClick={handlePrev}>
          &larr;
        </Arrow>
      )}
      {/* right arrow */}
      {renderArrowRight ? (
        renderArrowRight({ handleNext, activeIndex: index })
      ) : (
        <Arrow onClick={handleNext}>&rarr;</Arrow>
      )}
      {/* dots */}
      {renderDots ? (
        renderDots({ setActiveIndex: setIndex, activeIndex: index })
      ) : (
        <Dots
          length={childrens.length}
          setActiveIndex={setIndex}
          activeIndex={index}
        />
      )}
    </Contaier>
  )
}
