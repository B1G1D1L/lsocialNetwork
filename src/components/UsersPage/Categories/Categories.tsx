import React from 'react'
import cn from 'classnames'

import { Button } from '@components/app'

import styles from './Categories.module.css'



interface CategoriesProps {
  category: string
  onSelectCategory: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Categories = (props: CategoriesProps) => {
  const { category, onSelectCategory } = props

  return (
    <div className={cn('item', styles.categories)}>
      <Button
        variant={category === 'Followers' ? 'contained' : 'outlined'}
        onClick={onSelectCategory}
      >
        Followers
      </Button>
      <Button
        variant={category === 'Following' ? 'contained' : 'outlined'}
        onClick={onSelectCategory}
      >
        Following
      </Button>
      <Button
        variant={category === 'People You Might Like' ? 'contained' : 'outlined'}
        onClick={onSelectCategory}
      >
        People You Might Like
      </Button>
    </div>
  )
}