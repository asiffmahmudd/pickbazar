import { createContext, useContext, useState } from "react";


const ProductDrawerContext = createContext()

export function useProductDrawer(){
    return useContext(ProductDrawerContext)
}


export function ProductDrawerProvider({children}){
    const [isProductDrawerOpen, setProductDrawerOpen] = useState(false);
    const [product, setProduct] = useState({})
    
    const handleProductDrawerOpen = (pd) => {
        setProductDrawerOpen(true);
        if(pd){
            setProduct({
                id: pd.id,
                name: pd.name,
                price: pd.price,
                img: pd.img
            })
        }
        else{
            setProduct(null)
        }
    }

    const handleProductDrawerClose = () => {
        setProductDrawerOpen(false);
    }

    const value = {
        isProductDrawerOpen, setProductDrawerOpen, handleProductDrawerOpen, handleProductDrawerClose, product
    }

    return (
        <ProductDrawerContext.Provider value={value}>
            {children}
        </ProductDrawerContext.Provider>
    )
}
