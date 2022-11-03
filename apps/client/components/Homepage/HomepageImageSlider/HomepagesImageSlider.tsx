import * as React from 'react'
import { navbarHeightPx } from '~/components/Navbar/NavbarHeight'
import { Box, styled, useTheme } from '@mui/material'
import { HomepageImageSliderProps } from '~/components/Homepage/HomepageImageSlider/HomepagesImageSlider.interfaces'
import Carousel from '~/components/Homepage/HomepageImageSlider/carousel'

const SLIDER_AUTOMATIC_CHANGE = 70000 //milliseconds

const ImageSliderWrapper = styled(Box)(({ theme })=>({
  width: '100vw',
  height: `calc(100vh - ${navbarHeightPx})`,
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

export const HomepageImageSlider: React.FC<HomepageImageSliderProps> = ({ images }) => {
  const theme = useTheme()

  return (
    <ImageSliderWrapper>
      <Carousel
        autoPlay={true}
        loop={true}
        interval={SLIDER_AUTOMATIC_CHANGE}
      >
        {images.map((image) => (
          <Box
            onDragStart={(event) => {
              event.preventDefault()
              event.stopPropagation()
            }}
            key={1}
            sx={{ width: '100%', height: '100%', position: 'absolute' }}>
            <img
              src={image.url} alt={image.text ?? ''} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {
              image.text && <Box sx={{
                borderRadius: '40% 54% 46% 56% / 49% 43% 43% 57%',
                backgroundColor: image.backgroundColor,
                color: image.textColor,
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
                  {image.text}
                </div>
              </Box>
            }
          </Box>
        ))}
      </Carousel>
    </ImageSliderWrapper>
  )
}

