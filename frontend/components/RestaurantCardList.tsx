'use client'

import { FILTER_TIME } from '@/constants'
import { FilterContext } from '@/context/FilterContext'
import { Restaurant, RestaurantList } from '@/types'
import { Grid } from '@mui/material'
import { useCallback, useContext } from 'react'
import RestaurantCard from './RestaurantCard'

interface Props {
  restaurants: RestaurantList
}

export default function RestaurantCardList({ restaurants }: Props) {
  const filterContext = useContext(FilterContext)
  if (!filterContext) {
    throw new Error('Filtering context was used without a provider.')
  }

  const categoryId = filterContext.categoryId
  const timeId = filterContext.timeId
  const priceId = filterContext.priceId

  const filter = useCallback(
    (restaurant: Restaurant): boolean => {
      if (!!categoryId && !restaurant.filter_ids.includes(categoryId)) return false

      if (
        timeId !== -1 &&
        !(
          FILTER_TIME[timeId].from <= restaurant.delivery_time_minutes &&
          restaurant.delivery_time_minutes <= FILTER_TIME[timeId].to
        )
      )
        return false

      if (priceId !== -1 && !(filterContext.prices.ranges[priceId].id === restaurant.price_range_id)) return false

      return true
    },
    [categoryId, timeId, priceId]
  )

  return (
    <Grid container spacing={2}>
      {restaurants.restaurants
        .filter(restaurant => filter(restaurant))
        .map(restaurant => (
          <Grid key={restaurant.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <RestaurantCard restaurant={restaurant} />
          </Grid>
        ))}
    </Grid>
  )
}
