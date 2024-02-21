import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment} from '../state/page/pageSlice'


const NextButton = () => {
  const page = useSelector((state) => state.page.value);
  const images_remaining = useSelector((state) => state.images.remaining);
  const dispatch = useDispatch();
  return (
    <Button variant='contained' disabled={images_remaining <= 0 ? true: false} onClick={()=>
    dispatch(increment())
    }>
      Next page {" "}{page + 1}
    </Button>
  )
}

export default NextButton
