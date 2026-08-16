import React, { useState } from 'react'
import useCart from '../../hooks/useCart'
import { Box, Button, CircularProgress, FormControl, IconButton, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useCheckout from '../../hooks/useCheckout';


export default function Checkout() {

        const {data,isLoading,isError,error}= useCart();
                const {mutate:checkOut}=useCheckout();
        const [paymentMethod,setPaymentMethd]= useState('');

     if(isLoading) return <CircularProgress />
    if(isError) return <Typography color='red'>{error}</Typography>
  return (
    <>
    <Typography component='h1' variant='h1'>Checkout</Typography>
    <Box>
          <TableContainer>
        <Table>
          <TableHead>
            <TableCell> Product Name </TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
          </TableHead>

          <TableBody>
          {data.items.map( (item)=> (
            <TableRow key={item.id}>
              
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Box sx={{display:'flex',alignItems:'center'}}>
               
                  <Typography>{item.count}</Typography>
                 
                  </Box>
                  </TableCell>
              <TableCell>{item.totalPrice}$</TableCell>
              
            </TableRow>
          ))}
           
          </TableBody>
        </Table>
      </TableContainer>

    </Box>

 <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={paymentMethod}
    label="Age"
    onChange={ (e)=>setPaymentMethd(e.target.value)}
  >
    <MenuItem value={'cash'}>Cash</MenuItem>
    <MenuItem value={'visa'}>Visa</MenuItem>
  </Select>
</FormControl>

<Button variant='contained' color='success' onClick={()=>checkOut({paymentMethod})}>Pay Now</Button>

    </>
  )
}
