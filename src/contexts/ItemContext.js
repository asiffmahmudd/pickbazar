import { useEffect, useState } from "react"
import { useContext,createContext } from "react"
import { getCategories, getProducts } from "../utils/network"

const ItemContext = createContext()
export function useItem(){
    return useContext(ItemContext)
}

export function ItemContextProvider({children}){
    const [productChange, setProductChange] = useState(true)
    const [categoryChange, setCategoryChange] = useState(true)
    const [couponChange, setCouponChange] = useState(true)

    const [loading,setLoading] = useState()
    const [categoryLoading, setCategoryLoading] = useState()
    const [couponLoading, setCouponLoading] = useState()

    const [allproducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])

    const [allcategories, setAllCategories] = useState([])
    const [categories, setCategories] = useState([])

    const [allcoupons, setAllcoupons] = useState([])
    const [coupons, setCoupons] = useState([])

    useEffect(() => {
        setLoading(true)
        getProducts()
        .then(data => {
            console.log(data)
            setProducts(data)
            setAllProducts(data)
            setLoading(false)
        })
        
        // fetch('https://api.onimamzad.com/api/frontEnd/products')
        // .then(res => res.json())
        // .then(data => {
        //     setProducts(data)
        //     setAllProducts(data)
        //     setLoading(false)
        // }).catch(e => {
        //     setLoading(false)
        //     alert(e.message)
        // })
    },[productChange])

    useEffect(() => {
        setCategoryLoading(true)
        getCategories()
        .then(data => {
            setAllCategories(data)
            setCategories(data)
            setCategoryLoading(false)
        })
        // fetch('https://api.onimamzad.com/api/frontEnd/categories')
        // .then(res => res.json())
        // .then(data => {
        //     setAllCategories(data)
        //     setCategories(data)
        //     setCategoryLoading(false)
        // })
        // .catch(e => {
        //     setCategoryLoading(false)
        //     alert(e.message)
        // })
    },[categoryChange])

    // useEffect(() => {
    //     setCouponLoading(true)
    //     fetch('https://pickbazar-clone.herokuapp.com/coupons')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllcoupons(data)
    //         setCoupons(data)
    //         setCouponLoading(false)
    //     }).catch(e => {
    //         setCouponLoading(false)
    //         alert(e.message)
    //     })
    // },[couponChange])

    const value = {
        loading, setLoading, allproducts, products, setProducts, productChange, setProductChange, categoryChange, setCategoryChange, allcategories, categories, setCategories, categoryLoading, setCategoryLoading, couponLoading, setCouponLoading, allcoupons, coupons, setCoupons, setCouponChange, couponChange
    }

    return (
        <ItemContext.Provider value={value}>
            {children}
        </ItemContext.Provider>
    )
}