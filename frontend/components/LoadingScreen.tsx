import { Box, CircularProgress } from '@mui/material'

export const LoadingScreen = () => {
  return (
    <Box
      className='flex justify-center items-center h-dvh fixed w-full'
      sx={{
        backdropFilter: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1000
      }}
    >
      <CircularProgress />
    </Box>
  )
}
