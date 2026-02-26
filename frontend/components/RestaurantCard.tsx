'use client'

import { ArrowForward, Circle } from '@mui/icons-material'
import { Button, Card, Chip, Typography } from '@mui/material'

import { API_SERVER_URL, EXTERNAL_SERVER_URL, FILTER_TIME } from '@/constants'
import { OpenStatus, Restaurant } from '@/types'
import { useEffect, useState } from 'react'
import { StyledImage } from './StyledImage'

interface Props {
  restaurant: Restaurant
}

export default function RestaurantCard({ restaurant }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const title = FILTER_TIME.filter(
    time => time.from <= restaurant.delivery_time_minutes && restaurant.delivery_time_minutes <= time.to
  )[0].title

  const func = async () => {
    try {
      const status: OpenStatus = await fetch(API_SERVER_URL + '/open/' + restaurant.id, { cache: 'no-store' }).then(
        res => res.json()
      )

      setIsOpen(status.is_currently_open)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    func()
  }, [])

  return (
    <Card className='shadow-gray-100 p-4' sx={{ borderRadius: 1, height: '12.5rem' }}>
      <div className='h-full relative'>
        <div className='flex items-center gap-2 mb-1'>
          <Chip
            label={isOpen ? 'Open' : 'Closed'}
            size='small'
            variant='outlined'
            icon={<Circle color={isOpen ? 'success' : 'secondary'} fontSize='small' />}
            sx={{
              '.MuiChip-icon': {
                fontSize: '10px', // Target the icon class
                marginLeft: 1
              }
            }}
          />
          <Chip label={title} size='small' variant='outlined' />
        </div>

        <StyledImage
          src={EXTERNAL_SERVER_URL + restaurant.image_url}
          width={120}
          height={120}
          loading='lazy'
          className='absolute -top-10 -right-10'
        />

        <div className='flex w-full justify-between items-center gap-2 mb-1 absolute bottom-0'>
          <Typography variant='h6'>{restaurant.name}</Typography>
          <Button
            variant='contained'
            color='success'
            sx={{
              borderRadius: '50%', // Makes the button circular
              width: 30, // Set a fixed width
              height: 30, // Set a fixed height (same as width)
              minWidth: 0, // Override default minWidth for small buttons
              padding: 0 // Adjust padding as needed
            }}
          >
            <ArrowForward fontSize='small' />
          </Button>
        </div>
      </div>
    </Card>
  )
}
