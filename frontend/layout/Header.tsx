'use client'

import { Stack, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

import AnimatedHamburger from '@/components/AnimatedHamburger'
import { StyledImage } from '@/components/StyledImage'

export default function Header() {
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar sx={{ pt: 7, pb: 6 }}>
        <Stack width='100%' direction='row' justifyContent='space-between' alignItems='center'>
          <StyledImage src='/logo.svg' sx={{ cursor: 'pointer' }} />
          <Typography component='span' sx={{ display: 'none' }}>
            Munchies
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
