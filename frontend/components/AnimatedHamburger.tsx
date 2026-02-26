'use client'

import { useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react'

interface Props {
  onToggle?: (open: boolean) => void
}

export default function AnimatedHamburger({ onToggle }: Props) {
  const [open, setOpen] = useState<boolean>(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) // Below 600px

  const toggle = () => {
    const next = !open
    setOpen(next)
    onToggle?.(next)
  }

  return (
    <button
      onClick={toggle}
      className='relative w-8 h-8 flex flex-col justify-center items-center group'
      style={{ display: isMobile ? 'block' : 'none' }}
    >
      {/* Top line */}
      <span
        className={`
          absolute block h-0.5 w-6 bg-black rounded transition-all duration-300
          ${open ? 'rotate-45 translate-y-0' : '-translate-y-2'}
        `}
      />

      {/* Middle line */}
      <span
        className={`
          absolute block h-0.5 w-6 bg-black rounded transition-all duration-300
          ${open ? 'opacity-0' : 'opacity-100'}
        `}
      />

      {/* Bottom line */}
      <span
        className={`
          absolute block h-0.5 w-6 bg-black rounded transition-all duration-300
          ${open ? '-rotate-45 translate-y-0' : 'translate-y-2'}
        `}
      />
    </button>
  )
}
