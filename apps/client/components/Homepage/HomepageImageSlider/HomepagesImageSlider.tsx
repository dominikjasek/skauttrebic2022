import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import styles from './styles.module.css'
import { navbarHeightPx } from '~/components/Navbar/NavbarHeight'
import { Box, styled, useTheme } from '@mui/material'
import { HomepageImageSliderProps } from '~/components/Homepage/HomepageImageSlider/HomepagesImageSlider.interfaces'
import { useHarmonicIntervalFn } from 'react-use'

const SLIDER_AUTOMATIC_CHANGE = 7000 //milliseconds

const variants: Variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { ease: 'easeOut', duration: 0.2 },
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 1,
      transition: { ease: 'easeIn' },
    }
  },
}

const ImageSliderWrapper = styled(Box)(({ theme })=>({
  width: '100vw',
  height: `calc(100vh - ${navbarHeightPx.md})`,
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '50vh',
  }
}))

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}
export const HomepageImageSlider: React.FC<HomepageImageSliderProps> = ({ images }) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const theme = useTheme()

  useHarmonicIntervalFn(()=>{
    if (!userClickedArrow) {
      nextStep()
    }
    setUserClickedArrow(false)
  }, SLIDER_AUTOMATIC_CHANGE)

  const [userClickedArrow, setUserClickedArrow] = useState(false)

  const nextStep = () =>{
    setDirection(1)
    setUserClickedArrow(true)
    setIndex((currentIndex) => (currentIndex + 1) % images.length )
  }

  const prevStep = () => {
    setDirection(-1)
    setUserClickedArrow(true)
    setIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length )
  }

  return (
    <ImageSliderWrapper>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              nextStep()
            } else if (swipe > swipeConfidenceThreshold) {
              prevStep()
            }
          }}
        >
          <Box onDragStart={(event) => {
            event.preventDefault()
            event.stopPropagation()
          }}>
            <img
              src={images[index].url} alt={images[index].text ?? ''} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
            {
              images[index].text && <Box sx={{
                borderRadius: '40% 54% 46% 56% / 49% 43% 43% 57%',
                backgroundColor: images[index].backgroundColor,
                color: images[index].textColor,
                fontSize: theme.typography.fontSize * 2,
                fontFamily: 'skautbold',
                textAlign: 'center',
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: 'clamp(200px, 40%, 400px)',
                padding: '50px',
                margin: '60px',
                [theme.breakpoints.down('md')]: {
                  fontSize: theme.typography.fontSize,
                  width: 'clamp(200px, 30%, 250px)',
                  padding: '28px',
                  margin: '20px',
                },
              }}>
                <div>
                  {images[index].text}
                </div>
              </Box>
            }
          </Box>
        </motion.div>
      </AnimatePresence>
      <div className={styles.nextButton} onClick={nextStep}>
        {'‣'}
      </div>
      <div className={styles.previousButton} onClick={prevStep}>
        {'‣'}
      </div>
    </ImageSliderWrapper>
  )
}

