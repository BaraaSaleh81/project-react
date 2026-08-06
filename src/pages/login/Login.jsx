import { Box, Button, Card, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import useAuthStore from '../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../../validations/LoginSchems';

export default function Login() {
      const navigate = useNavigate()

    const [serverErrors,setServerErroes] = useState([]);
    const setToken = useAuthStore((state)=> state.setToken);
    const {register,handleSubmit,formState:{errors,isSubmitted}} = useForm(
      {
        resolver:yupResolver(loginSchema)
      }
    );
    const LoginForm =async(data)=>{
        try{
             const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Login`,data);
             setToken(response.data.accessToken);
             navigate('/');
             localStorage.setItem("accessToken",response.data.accessToken)
        }catch(err){
          setServerErroes(err.response.data.errors)

        }
    }
  return (
    <>
    <Box component="section" className='loginPage'>
      <Typography  component="h1" variant='h1'>  Login </Typography>
      {serverErrors?.length > 0 ? serverErrors.map( (error)=>
      <Typography component='h2' variant='h4' color="error">{error}</Typography>
      ) : " "}

      <Box onSubmit={handleSubmit(LoginForm)} component="form" sx={{display:'flex', flexDirection:'column', gap:3}}>
    
       <TextField  {...register("email")}  label="Email" variant="standard"
        error={errors.email}
        helperText={errors.email?.message}
       />
        <TextField {...register("password")} label="Password" variant="standard"
         error={errors.password}
        helperText={errors.password?.message}
        />

        <Button variant='contained' type='submit' disabled={isSubmitted}>
          {isSubmitted? <CircularProgress />  :
          "Login"}
          </Button>
        
      </Box>
    </Box>
    
    </>
  )
}
