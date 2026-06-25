import { Box, CircularProgress, Typography } from '@mui/material';
import useCategories from '../../hooks/useCategories';

export default function Categories() {

   const{data,isLoading,isError,error}= useCategories();

    if(isLoading) return <CircularProgress />
    if(isError) return <Typography color='red'>{error}</Typography>
  return (
    <div>
    
    {data.response.data.map((category)=> <Box><Typography>{category.name}</Typography></Box>)}
    </div>
  )
}
