import { Metadata } from 'next'

import Container from '@mui/material/Container'

import { API_SERVER_URL } from '@/constants'
import Content from '@/layout/Content'
import { FilterList, PriceRangeList, RestaurantList } from '@/types'

export const metadata: Metadata = {
  title: 'Munchies Test Assessment',
  description: 'Next.js + Material UI + TailwindCss',
  icons: {
    icon: '/favicon.svg'
  }
}

export default async function Page() {
  const restaurants: RestaurantList = await fetch(API_SERVER_URL + '/restaurants', { cache: 'no-store' }).then(res =>
    res.json()
  )
  const filters: FilterList = await fetch(API_SERVER_URL + '/filter', { cache: 'no-store' }).then(res => res.json())

  const prices: PriceRangeList = await fetch(API_SERVER_URL + '/price-range', { cache: 'no-store' }).then(res =>
    res.json()
  )

  return (
    <div className='min-h-screen'>
      <Container className='py-16 min-h-screen' sx={{ maxWidth: '1440px !important' }}>
        <Content restaurants={restaurants} filters={filters} prices={prices} />
      </Container>
    </div>
  )
}
