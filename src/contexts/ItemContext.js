import { useEffect, useState } from "react"
import { useContext,createContext } from "react"

const ItemContext = createContext()
export function useItem(){
    return useContext(ItemContext)
}

export function ItemContextProvider({children}){
    const [change, setChange] = useState(true)
    const [loading,setLoading] = useState(true)
    const [allproducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setAllProducts(data)
            setLoading(false)
        })
    },[change])

    const value = {
        loading, setLoading, allproducts, products, setProducts, change, setChange 
    }

    return (
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    )
}