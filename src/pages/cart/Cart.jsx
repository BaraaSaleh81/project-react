import { Box, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useCart from '../../hooks/useCart';

export default function Cart() {

    const {data,isLoading,isError,error}= useCart()
    
    if(isLoading) return <CircularProgress />
    if(isError) return <Typography color='red'>{error}</Typography>
console.log(data);
  return (
    <Box component='section'>
      <Typography variant='h2'>Cart</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell> Product Name </TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Actions</TableCell>
          </TableHead>

          <TableBody>
          {data.items.map( (item)=> (
            <TableRow key={item.id}>
              
              <TableCell>{item.price}</TableCell>
              

            </TableRow>
          ))}
           
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
