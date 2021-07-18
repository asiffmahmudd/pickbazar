import { useEffect, useState } from "react"
import { useContext,createContext } from "react"

const ItemContext = createContext()
export function useItem(){
    return useContext(ItemContext)
}

export function ItemContextProvider({children}){
    const [productChange, setProductChange] = useState(true)
    const [categoryChange, setCategoryChange] = useState(true)

    const [loading,setLoading] = useState()
    const [categoryLoading, setCategoryLoading] = useState()

    const [allproducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])

    const [allcategories, setAllCategories] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setAllProducts(data)
            setLoading(false)
        })
    },[productChange])

    useEffect(() => {
        setCategoryLoading(true)
        fetch('http://localhost:4000/categories')
        .then(res => res.json())
        .then(data => {
            setAllCategories(data)
            setCategories(data)
            setCategoryLoading(false)
        })
    },[categoryChange])

    const value = {
        loading, setLoading, allproducts, products, setProducts, productChange, setProductChange, categoryChange, setCategoryChange, allcategories, categories, setCategories, categoryLoading, setCategoryLoading 
    }

    return (
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    )
}