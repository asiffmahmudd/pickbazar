import { createContext, useContext, useState } from "react";


const ProductDrawerContext = createContext()

export function useProductDrawer(){
    return useContext(ProductDrawerContext)
}


export function ProductDrawerProvider({children}){
    const [isProductDrawerOpen, setProductDrawerOpen] = useState(false);
    
    const handleProductDrawerOpen = () => {
        setProductDrawerOpen(true);
    }
    const handleProductDrawerClose = () => {
        setProductDrawerOpen(false);
    }

    const value = {
        isProductDrawerOpen, setProductDrawerOpen, handleProductDrawerOpen, handleProductDrawerClose
    }

    return (
        <ProductDrawerContext.Provider value={value}>
            {children}
        </ProductDrawerContext.Provider>
    )
}
