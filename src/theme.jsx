import { createTheme } from "@mui/material";

const getTheme = (mode)=>{
    return createTheme({
    palette:{
                mode:mode  ,
        primary:{
            main:'#ff00ff',     
        },     
    },
    typography:{
        h1:{
            fontFamily:"fangsong"
        }
    },
    spacing:4
})
}
export default getTheme;