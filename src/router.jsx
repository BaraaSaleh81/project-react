import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import Products from "./pages/product/Products";
import ProductDetails from "./pages/product/ProductDetails";
import ProutectedRouter from "./ProutectedRouter";
import Checkout from "./pages/checout/Checkout";
import ProfileLayout from "./pages/profile/ProfileLayout";
import ProfileInfo from "./pages/profile/ProfileInfo";
import ProfileOrders from "./pages/profile/ProfileOrders";
import  Shop from "./pages/shop/Shop";





const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout />,
    children:[
        {
        index:true,
        element:<Home />
        },
        {
          path:"products",
          element:<Products />
        },
        {
          path:"product/:id",
          element:<ProductDetails />
        },
      
           {
          path:"register",
          element:<Register />
        },  
         {
          path:"cart",
          element:<ProutectedRouter>
                  < Cart />
                 </ProutectedRouter>
        },
           
         {
          path:"checout",
          element:<ProutectedRouter>
                  < Checkout />
                 </ProutectedRouter>
        },
         {
          path:"profile",
          element:<ProutectedRouter>
                  <ProfileLayout />
                 </ProutectedRouter>,
                 children:[
                  {
                    index:true,
                    element:<ProfileInfo />
                  },
                  {
                    path:'orders',
                    element:<ProfileOrders />
                  }
                 ]
                
        },
          {
          path:"login",
          element:<Login />
        },
        
      
    ]
  },
])

export default router;