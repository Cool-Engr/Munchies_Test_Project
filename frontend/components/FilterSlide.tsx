'use client'

import { useContext } from 'react'

import { Card } from '@mui/material'

import { EXTERNAL_SERVER_URL } from '@/constants'
import { FilterContext } from '@/context/FilterContext'
import { StyledImage } from './StyledImage'

export default function FilterSlide() {
  const filterContext = useContext(FilterContext)
  if (!filterContext) {
    throw new Error('Filtering context was used without a provider.')
  }

  const categories = filterContext.categories
  const categoryId = filterContext.categoryId

  const toggleCategory = (id: string) => {
    filterContext.onCategoryClicked(id === categoryId ? '' : id)
  }

  return (
    <div className='mb-6 overflow-x-auto scrollbar-hide'>
      <div className='flex gap-3 w-max'>
        {categories.filters.map(cat => {
          const active = categoryId === cat.id

          return (
            <Card
              key={cat.id}
              className={`shrink-0 !inline-flex items-start gap-2 pl-3 my-1 rounded-full shadow-neutral-400 cursor-pointer transition
    ${active ? 'bg-emerald-500 text-white' : 'bg-white'} w-40 h-20 relative`}
              sx={{ backgroundColor: active ? '#00703A' : '#ffffff' }}
              onClick={() => toggleCategory(cat.id)}
            >
              <span className={`text-sm mt-4 ${active ? 'text-white' : 'text-black'}`}>{cat.name}</span>
              <StyledImage
                src={EXTERNAL_SERVER_URL + cat.image_url}
                width={80}
                height={80}
                loading='lazy'
                className='absolute left-20'
              />
            </Card>
          )
        })}
      </div>
    </div>
  )
}
