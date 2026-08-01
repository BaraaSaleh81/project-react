import React from 'react'
import { useParams } from 'react-router-dom'
import useProduct from '../../hooks/useProduct'
import { Box, CircularProgress, Typography } from '@mui/material';

export default function ProductDetails() {

  const {id} = useParams()
  const {data,isLoading,isError,error} = useProduct(id);
  console.log(data)

  if(isLoading) return <CircularProgress />
   if(isError) return <Typography color='red'>{error}</Typography>
    
   

  return (
    <Box>
      <Typography>{data.response.name}</Typography>
      <Typography>{data.response.description}</Typography>
      <Typography>{data.response.id}</Typography>
      <Typography>{data.response.price}</Typography>

    </Box>
  )
}
