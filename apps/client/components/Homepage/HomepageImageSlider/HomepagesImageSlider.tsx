import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import styles from './styles.module.css'
import { navbarHeightPx } from '~/components/Navbar/NavbarHeight'
import { Box, styled, useTheme } from '@mui/material'
import { HomepageImageSliderProps } from '~/components/Homepage/HomepageImageSlider/HomepagesImageSlider.interfaces'

const SLIDER_AUTOMATIC_CHANGE = 7000 //milliseconds

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    }
  }
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

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}
export const HomepageImageSlider: React.FC<HomepageImageSliderProps> = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0])
  const theme = useTheme()
  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page)
  setInterval(()=>{
    if (!userClickedArrow) {
      setPage([page + 1, 1])
    }
    setUserClickedArrow(false)
  },SLIDER_AUTOMATIC_CHANGE)

  const [userClickedArrow, setUserClickedArrow] = useState(false)
  const paginate = (newDirection: number) => {
    setUserClickedArrow(true)
    setPage([page + newDirection, newDirection])
  }

  return (
    <ImageSliderWrapper>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          style={{ width: '100%', height: '100%', position: 'absolute' }}
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 800, damping: 70 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <Box onDragStart={(event) => {
            event.preventDefault()
            event.stopPropagation()
          }}>
            <img
              src={images[imageIndex].url} alt={images[imageIndex].text ?? ''} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
            {
              images[imageIndex].text && <Box sx={{
                borderRadius: '40% 54% 46% 56% / 49% 43% 43% 57%',
                backgroundColor: images[imageIndex].backgroundColor,
                color: images[imageIndex].textColor,
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
                  {images[imageIndex].text}
                </div>
              </Box>
            }
          </Box>
        </motion.div>
      </AnimatePresence>
      <div className={styles.nextButton} onClick={() => paginate(1)}>
        {'‣'}
      </div>
      <div className={styles.previousButton} onClick={() => paginate(-1)}>
        {'‣'}
      </div>
    </ImageSliderWrapper>
  )
}

