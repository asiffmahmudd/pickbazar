import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import AdminProductHeader from './AdminProductHeader';
import './AdminProducts.css';
import AdminProductItem from './AdminProductItem';
// import allproducts from '../../../../data/products';
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
    // const [loading,setLoading] = useState(true)
    // const [allproducts, setAllProducts] = useState([])
    const [isAllChecked, setIsAllChecked] = useState(false)
    const [deselectAll, setDeselectAll] = useState(true);
    const [selected, setSelected] = useState([])
    // const [products,setProducts] = useState(allproducts)

    // useEffect(() => {
    //     setLoading(true)
    //     fetch('http://localhost:4000/products')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllProducts(data)
    //         setProducts(data)
    //         setLoading(false)
    //     })
    // },[])

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

    // useEffect(() => {
    //     if(isAllChecked){
                // setSelected(products)
    //      }
    //     if(deselectAll){
    //         setSelected([])
    //     }
    // },[isAllChecked, deselectAll, products])

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

    const handleBulkDelete = () => {
        console.log(selected)
    }

    const forceUpdate = useForceUpdate();

    const productFilter = (category, price) => {
        if(category === "all"){
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

    const priceFilter = (pd, price) => {
        const newProductList = pd
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

    return (
        <AdminLayout >
            <div className="admin-products container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <AdminProductHeader 
                            productFilter={productFilter}
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