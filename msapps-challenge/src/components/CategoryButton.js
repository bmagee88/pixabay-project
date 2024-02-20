import { Button } from '@mui/material'
import React from 'react'

const CategoryButton = ({setIsOpen}) => {
  return (
    <Button variant='contained' onClick={()=>setIsOpen(true)}>
      Category
    </Button>
  )
}

export default CategoryButton
