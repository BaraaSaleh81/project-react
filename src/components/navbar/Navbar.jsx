import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../store/useAuthStore'
import useCart from '../../hooks/useCart';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18next';
import { Button } from '@mui/material';

export default function Navbar() {

  const navigate = useNavigate()
  const token =useAuthStore((state) => state.token);
  console.log(token)
  const logout = useAuthStore( (state) => state.logout);
  const {data}= useCart()
  const cartCount = data?.items.length || 0 ;
  const {t} = useTranslation()
    const changeLanguage = () => {
        const newLng = i18n.language == 'ar'?'en':'ar'
    i18n.changeLanguage(newLng);
  }
   const handleLogout = ()=>{
    logout();
    navigate('/login');
   }

  return (
    <nav>
    <Link to="/">{t('Home')}</Link>
    <Link to="products">{t('Products')}</Link>
    { token ? <>
        <Link to="login" onClick={handleLogout}>{t('Logout')}</Link>

      <Link to="cart" >{t('Cart')} {cartCount}</Link>
</> :
<>
    <Link to="register">{t('Register')}</Link>
         <Link to="login">{t('Login')}</Link>

</>
}
          <Button onClick={changeLanguage} color="inherit">{i18n.language === 'ar'?'EN':'Ar'}</Button>

    </nav>
  )
}
