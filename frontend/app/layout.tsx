'use client'

import { Metadata } from 'next'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { LoadingScreen } from '@/components/LoadingScreen'
import { Suspense } from 'react'
import '../styles/globals.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif'
  },
  palette: {
    primary: {
      main: '#fafafa', // emerald-500
      light: '#fafafa',
      dark: '#fafafa'
    },
    background: {
      default: '#fafafa',
      paper: '#FFFFFF'
    },
    text: {
      primary: 'hsl(220, 30%, 6%)',
      secondary: 'hsl(220, 20%, 10%)'
    },
    success: {
      main: '#00703A',
      light: '##00703A'
    },
    secondary: {
      main: 'hsl(220, 30%, 6%)',
      light: 'hsl(220, 30%, 6%)'
    }
  },
  shape: {
    borderRadius: 8
  }
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
