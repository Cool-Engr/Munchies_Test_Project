import { FilterList, PriceRangeList } from '@/types'
import { createContext } from 'react'

export const FilterContext = createContext<{
  categories: FilterList
  prices: PriceRangeList
  onCategoryClicked: (id: string) => void
  onTimeClicked: (id: number) => void
  onPriceClicked: (id: number) => void
  categoryId: string
  timeId: number
  priceId: number
} | null>(null)
