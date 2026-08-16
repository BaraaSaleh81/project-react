import React from 'react'
import useProducts from '../../hooks/useProducts'
import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export default function Products() {

    const {data,isLoading,isError,error} = useProducts();
      const {t} = useTranslation()
    

    if(isLoading) return <CircularProgress />
    if(isError) return <Typography color='red'>{error}</Typography>
    
  return (
    <Box className="products" component={"section"}>
        <Typography  component="h1" variant='h2' color='primary'>{t('Products')}</Typography>
        <Grid container spacing={{xs:2 , md:3}} sx={{textAlign:'center'}}>

        {data.response.data.map((product)=>{
            return <Grid item sx={{xs:6, md:8}}>  
                    <Link to={`/product/${product.id}`} style={{textDecoration:'noe',color:'inherit'}}>
                     <Card>
                        <CardMedia
                        component="img"
                        image={product.image}
                        sx={{ width:200}}
                        ></CardMedia>
                        <CardContent>
                            <Typography component="h3" variant='h3'>{product.name}</Typography>
                            <Typography component="span" variant='body1'>{product.price}$</Typography>
                        </CardContent>
                     </Card>
                    </Link>
            </Grid>
            
        })}
        </Grid>
    </Box>
  )
}
