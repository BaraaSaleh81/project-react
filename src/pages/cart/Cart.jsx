import { Box, Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import useCart from '../../hooks/useCart';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTranslation } from 'react-i18next';
import useClearCart from '../../hooks/useClearCart';
import {  useNavigate } from 'react-router-dom';


export default function Cart() {
  const navigate = useNavigate()
          const {t} = useTranslation()

    const {data,isLoading,isError,error}= useCart()
    const {mutate:removeItem,isPending} = useRemoveFromCart()
    const {mutate:updateItem,isPending:updateItemPending} = useUpdateCartItem()
 const {mutate:clearCart} = useClearCart();
    const handleClearCart = ()=>{
       clearCart()
    }
    if(isLoading) return <CircularProgress />
    if(isError) return <Typography color='red'>{error}</Typography>
      const handleUpdate = (productId,action)=>{
       const item =data.items.find(i=>i.productId == productId);
       if(action == '+'){
        updateItem({productId,count:item.count+1})
       }else{
                updateItem({productId,count:item.count-1})

       }
    }
  
    
console.log(data);
  return (
    <Box component='section'>
      <Typography variant='h2'>{t('Cart')}</Typography>
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
              
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Box sx={{display:'flex',alignItems:'center'}}>
                <IconButton >
                  <RemoveCircleIcon  onClick={()=>handleUpdate(item.productId,'-')} />
                  </IconButton>
                  <Typography>{item.count}</Typography>
                  <IconButton >
                    <AddCircleIcon  onClick={()=>handleUpdate(item.productId,'+')}/>
                  </IconButton>
                  </Box>
                  </TableCell>
              <TableCell>{item.totalPrice}$</TableCell>
              <TableCell><Button color='error'
              disabled={isPending}
              onClick={()=>removeItem(item.productId)}
              > Remove</Button></TableCell>
            </TableRow>
          ))}
           
          </TableBody>
        </Table>
      </TableContainer>
      			{updateItem.length > 0 && <button onClick={handleClearCart}>Clear Cart</button>}
<Box  >
  <Button variant='contained' onClick={()=>navigate('/checout')}>Process To Checkout</Button>
  <Button variant='contained' onClick={()=>navigate('/')}>Continue Shopping</Button>
</Box>
    </Box>

  )
}
