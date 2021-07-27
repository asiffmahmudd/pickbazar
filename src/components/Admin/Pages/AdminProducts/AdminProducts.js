import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import AdminProductHeader from './AdminProductHeader';
import './AdminProducts.css';
import AdminProductItem from './AdminProductItem';
import SelectBar from './SelectBar';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from '../../../Loading/Loading';
import { useItem } from '../../../../contexts/ItemContext';

export function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const AdminProducts = () => {
    const {loading, setLoading, allproducts, products, setProducts} = useItem()
    const [isAllChecked, setIsAllChecked] = useState(false)
    const [deselectAll, setDeselectAll] = useState(true);
    const [selected, setSelected] = useState([])

    const handleBulkDelete = () => {
        setLoading(true)
        const selectedIds = selected.map(item => item._id) 
        fetch(`http://localhost:4000/deleteBulkProduct/`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selectedIds)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                const newList = products.filter(item => {
                    let deleteItem = selected.find(item2 => item._id === item2._id)
                    return deleteItem? false: true
                })
                setProducts(newList)
            }
            resetSelection()
            setLoading(false)
        })
        .catch(e => {
            alert(e.message)
        })
    }

    const handleSingleDelete = (id) => {
        setLoading(true)
        fetch(`http://localhost:4000/deleteProduct/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            if(data){
                const newList = products.filter(pd => pd._id !== id)
                setProducts(newList)
            }
        })
    }

    const handleAllChecked = () => {
        setSelected(products)
        setIsAllChecked(true)
        setDeselectAll(false)
    }

    const handleDeselectAll = () => {
        setSelected([])
        setIsAllChecked(false)
        setDeselectAll(true)
    }

    useEffect(() => {
        if(products?.length > 0){
            if(selected.length < products.length){
                setIsAllChecked(false)
            }
            else if(selected.length === products.length){
                setIsAllChecked(true)
            }
            if(selected.length > 0){
                setDeselectAll(false)
            }
            else if(selected.length === 0){
                setDeselectAll(true)
            }
        }
    }, [selected, products?.length])

    const resetSelection = () => {
        setDeselectAll(true)
        setSelected([])
        setIsAllChecked(false)
    }

    const forceUpdate = useForceUpdate();

    const [categoryFilterState, setCategoryFilterState] = useState("")
    const productFilter = (category, price, query) => {
        setCategoryFilterState(category)
        if(search && query){
            let newProductList = products.slice()
            newProductList = priceFilter(newProductList, price)
            setProducts(newProductList)
        }
        else if(category === "all"){
            let newProductList = allproducts.slice()
            newProductList = priceFilter(newProductList, price)
            setProducts(newProductList)
        }
        else{
            let newProductList = allproducts.filter(pd => pd.category === category)
            newProductList = priceFilter(newProductList, price)
            setProducts(newProductList)
        }
        resetSelection()
        forceUpdate()
    }

    const [priceFilterState, setPriceFilterState] = useState("")
    const priceFilter = (pd, price) => {
        const newProductList = pd
        setPriceFilterState(price)
        if(price === 'highest to lowest'){
            newProductList.sort((a, b) => {
                if(a.sale > 0 && b.sale > 0){
                    return a.sale > b.sale ? -1 : 1
                }
                else if(a.sale > 0 && b.sale === 0){
                    return a.sale > b.price ? -1 : 1
                }
                else if(a.sale === 0 && b.sale > 0){
                    return a.price > b.sale ? -1 : 1
                }
                else{
                    return a.price > b.price ? -1 : 1
                }
            })
        }
        else if(price === "lowest to highest"){
            newProductList.sort((a, b) => {
                if(a.sale > 0 && b.sale > 0){
                    return a.sale > b.sale ? 1 : -1
                }
                else if(a.sale > 0 && b.sale === 0){
                    return a.sale > b.price ? 1 : -1
                }
                else if(a.sale === 0 && b.sale > 0){
                    return a.price > b.sale ? 1 : -1
                }
                else{
                    return a.price > b.price ? 1 : -1
                }
            })
        } 
        return newProductList
    }

    const [searchLoading, setSearchLoading] = useState(false)
    const [search,setSearch] = useState()
    const handleSearch = (e) => {
        let apiURL = ""
        if(e.target.value === ""){
            setSearch(false)
            if(categoryFilterState !== "" || priceFilterState !== ""){
                productFilter(categoryFilterState, priceFilterState, false)
            }
            else{
                setProducts(allproducts.slice())
            }
        }
        else if(e.which === 13){
            setSearch(true)
            apiURL = 'http://localhost:4000/products/'+e.target.value
            setSearchLoading(true)
            fetch(apiURL)
            .then(res => res.json())
            .then(result =>{
                setSearchLoading(false)
                let newList = result
                if(priceFilterState){
                    newList = priceFilter(result, priceFilterState, true)
                }
                setProducts(newList)
            })
        }
        
    }
    
    useEffect(() =>{
        setCategoryFilterState("")
        setPriceFilterState("")
        setProducts(allproducts)
    },[allproducts, setProducts])

    return (
        <AdminLayout >
            <div className="admin-products container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <AdminProductHeader 
                            productFilter={productFilter}
                            handleSearch={handleSearch}
                        >
                        </AdminProductHeader>
                    </div>
                    {
                        selected.length > 0 &&
                        <div className="col-lg-12 mt-3" style={{padding:0}}>
                            <SelectBar 
                                handleAllChecked={handleAllChecked}
                                handleDeselectAll={handleDeselectAll}
                                handleDelete={handleBulkDelete}
                            >
                            </SelectBar>
                        </div>
                    }
                    
                    <div className="col-lg-12 admin-products-body">
                        <Loading loading={loading}></Loading>
                        <div className="row pb-5">
                            {
                                searchLoading &&
                                <div className="col-md-12 mt-4 text-center">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            }
                            {
                                !loading && products?.length === 0 &&
                                <h1 className="col-md-12 mt-4 text-center">No products found</h1>
                            }
                            {
                                products?.map((product,index) => (
                                    <AdminProductItem 
                                        key={index} 
                                        isAllChecked={isAllChecked} 
                                        setSelected={setSelected} 
                                        deselectAll={deselectAll}
                                        selected={selected} 
                                        products={products}
                                        product={product} 
                                        handleSingleDelete={handleSingleDelete}
                                    >
                                    </AdminProductItem>
                                ))
                            }
                        </div>
                        
                    </div>
                </div>
            </div>

        </AdminLayout>
    );
};

export default AdminProducts;