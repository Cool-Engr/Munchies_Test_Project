'use client'

import { Box } from '@mui/material'

import SidebarFilters from '@/components/SidebarFilters'
import { FilterContext } from '@/context/FilterContext'
import { FilterList, PriceRangeList, RestaurantList } from '@/types'
import { useMemo, useState } from 'react'
import Header from './Header'
import Main from './Main'

interface ContentProps {
  restaurants: RestaurantList
  filters: FilterList
  prices: PriceRangeList
}

export default function Content({ restaurants, filters, prices }: ContentProps) {
  const [categoryId, setCategoryId] = useState<string>('')
  const [timeId, setTimeId] = useState<number>(-1)
  const [priceId, setPriceId] = useState<number>(-1)

  const handleCategoryId = (id: string) => {
    setCategoryId(id)
  }

  const handleTimeId = (id: number) => {
    setTimeId(id)
  }

  const handlePriceId = (id: number) => {
    setPriceId(id)
  }

  const filterContextValue = useMemo(() => {
    return {
      categories: filters,
      prices: prices,
      onCategoryClicked: handleCategoryId,
      onTimeClicked: handleTimeId,
      onPriceClicked: handlePriceId,
      categoryId,
      timeId,
      priceId
    }
  }, [categoryId, timeId, priceId])

  return (
    <FilterContext.Provider value={filterContextValue}>
      <Box>
        <Header />
        <Box className='flex'>
          <SidebarFilters />
          <Main restaurants={restaurants} />
        </Box>
      </Box>
    </FilterContext.Provider>
  )
}
