import { useMediaQuery, useTheme } from '@mui/material'

export const useScreen = () => {
  const theme = useTheme()

  const onlySmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const onlyLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

  return {
    onlySmallScreen,
    onlyMediumScreen,
    onlyLargeScreen
  }
}
