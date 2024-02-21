import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement } from '../state/page/pageSlice';

const PrevButton = () => {
  
  const page = useSelector((state) => state.page.value);
  const dispatch = useDispatch();
  return (
    <Button variant='contained' 
    disabled={page-1 <= 0 ? true: false}
    onClick={()=>
    dispatch(decrement())
    }>
      Prev page {" "}{page <= 1 ? "-": page - 1}
    </Button>
  )
}

export default PrevButton
