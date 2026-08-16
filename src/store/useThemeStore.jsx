import { create } from "zustand";

const useThemeStore = create((set)=>({

    mode:'light',
    toggleModel:()=>{
        set((state)=>({
            mode:state.mode === "light"?'dark':'light'
        }))
    }

}))
export default useThemeStore;