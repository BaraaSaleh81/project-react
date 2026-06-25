import { Box, Button, Card, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from '../../validations/RegisterSchems';

export default function Register() {

    const [serverErrors,setServerErroes] = useState([]);
    const {register,handleSubmit,formState:{errors,isSubmitted}} = useForm(
      {
        resolver:yupResolver(registerSchema)
      }
    );
    const RegisterForm =async(data)=>{
        try{
             const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,data);
             console.log(response);
        }catch(err){
          setServerErroes(err.response.data.errors)

        }
    }
  return (
    <>
    <Box component="section" className='registerPage'>
      <Typography  component="h1" variant='h1'>  Register </Typography>
      {serverErrors?.length > 0 ? serverErrors.map( (error)=>
      <Typography component='h2' variant='h4' color="error">{error}</Typography>
      ) : " "}

      <Box onSubmit={handleSubmit(RegisterForm)} component="form" sx={{display:'flex', flexDirection:'column', gap:3}}>
        <TextField {...register("userName")}  label="user_Name" variant="standard"
        error={errors.userName}
        helperText={errors.userName?.message}
        />
        <TextField {...register("fullName")} label="full_Name" variant="standard"
         error={errors.fullName}
        helperText={errors.fullName?.message}
        />
        <TextField {...register("phoneNumber")}  label="phone_Number" variant="standard"
         error={errors.phoneNumber}
        helperText={errors.phoneNumber?.message}
        />
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
          "Register"}
          </Button>
        
      </Box>
    </Box>
    
    </>
  )
}
