'use client'

import { FILTER_PRICE, FILTER_TIME } from '@/constants'
import { FilterContext } from '@/context/FilterContext'
import { Button, Card, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useContext } from 'react'

export default function SidebarFilters() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) // Below 600px

  const filterContext = useContext(FilterContext)
  if (!filterContext) {
    throw new Error('Filtering context was used without a provider.')
  }

  const categories = filterContext.categories
  const categoryId = filterContext.categoryId
  const timeId = filterContext.timeId
  const priceId = filterContext.priceId

  const toggleCategory = (id: string) => {
    filterContext.onCategoryClicked(id === categoryId ? '' : id)
  }

  const toggleTime = (id: number) => {
    filterContext.onTimeClicked(id === timeId ? -1 : id)
  }

  const togglePrice = (id: number) => {
    filterContext.onPriceClicked(id === priceId ? -1 : id)
  }

  return (
    <Card className='max-w-xs px-6 pt-6 mt-1 mb-6 rounded-3xl shadow-sm' sx={{ display: isMobile ? 'none' : 'block' }}>
      <Typography variant='h6' className='mb-6'>
        Filter
      </Typography>

      {/* Food Category */}
      <div className='mb-6'>
        <p className='text-xs font-semibold text-gray-500 mb-3'>FOOD CATEGORY</p>
        <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>
          {categories.filters.map(category => (
            <Button
              key={category.id}
              variant={category.id === categoryId ? 'contained' : 'outlined'}
              color={category.id === categoryId ? 'success' : 'inherit'}
              onClick={() => toggleCategory(category.id)}
              sx={{ borderColor: '#0000001A' }}
              className='justify-between rounded-xl normal-case'
            >
              {category.name}
            </Button>
          ))}
        </Stack>
      </div>

      {/* Delivery Time */}
      <div className='mb-6'>
        <p className='text-xs font-semibold text-gray-500 mb-3'>DELIVERY TIME</p>
        <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>
          {FILTER_TIME.map((time, idx) => (
            <Button
              key={time.title}
              variant={idx === timeId ? 'contained' : 'outlined'}
              color={idx === timeId ? 'success' : 'inherit'}
              onClick={() => toggleTime(idx)}
              sx={{ borderColor: '#0000001A' }}
              className='justify-between rounded-xl normal-case'
            >
              {time.title}
            </Button>
          ))}
        </Stack>
      </div>

      {/* Price Range */}
      <div>
        <p className='text-xs font-semibold text-gray-500 mb-3'>PRICE RANGE</p>
        <Stack direction='row' spacing={1} flexWrap='wrap' useFlexGap>
          {FILTER_PRICE.map((price, idx) => (
            <Button
              key={price}
              variant={idx === priceId ? 'contained' : 'outlined'}
              color={idx === priceId ? 'success' : 'inherit'}
              onClick={() => togglePrice(idx)}
              sx={{ borderColor: '#0000001A' }}
              className='rounded-full h-10 w-10 min-w-0'
            >
              {price}
            </Button>
          ))}
        </Stack>
      </div>
    </Card>
  )
}
