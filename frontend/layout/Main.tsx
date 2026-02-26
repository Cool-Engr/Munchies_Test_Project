import FilterSlide from '@/components/FilterSlide'
import RestaurantCardList from '@/components/RestaurantCardList'
import { RestaurantList } from '@/types'
import { Stack, Typography } from '@mui/material'

interface Props {
  restaurants: RestaurantList
}

export default function Main({ restaurants }: Props) {
  return (
    <Stack sx={{ px: 3, pb: 3, width: '100%', maxWidth: '100%', overflow: 'hidden' }} spacing={3}>
      <FilterSlide />

      <Typography variant='h4'>{`Restaurant's`}</Typography>

      <RestaurantCardList restaurants={restaurants} />
    </Stack>
  )
}
