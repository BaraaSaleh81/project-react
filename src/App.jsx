import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './i18next'
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import useThemeStore from "./store/useThemeStore";
import getTheme from "./theme";



export default function App() {
   const mode = useThemeStore((state)=> state.mode)
  const queryClient = new QueryClient()
  return (
    <>
        <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools initialIsOpen={false} />
         <ThemeProvider theme={getTheme(mode)}>
          
         <CssBaseline />
          <RouterProvider router={router} />
            </ThemeProvider>
          </QueryClientProvider>


    </>
  )
}
