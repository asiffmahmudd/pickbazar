import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import AdminProductHeader from './AdminProductHeader';
import './AdminProducts.css';
import AdminProductItem from './AdminProductItem';
import allproducts from '../../../../data/products';
import SelectBar from './SelectBar';
import { useState } from 'react';
import { useEffect } from 'react';

export function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const AdminProducts = () => {

    // const [allproducts, setAllProducts] = useState([])
    const [isAllChecked, setIsAllChecked] = useState(false)
    const [deselectAll, setDeselectAll] = useState(true);
    const [selected, setSelected] = useState([])
    const [products,setProducts] = useState(allproducts)

    // useEffect(() => {
    //     fetch('http://localhost:4000/products')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllProducts(data)
    //         setProducts(data)
    //     })
    // },[])
    // console.log(products)

    useEffect(() => {
        if(selected.length < products?.length){
            setIsAllChecked(false)
        }
        else if(selected.length === products?.length){
            setIsAllChecked(true)
        }
        if(selected.length > 0){
            setDeselectAll(false)
        }
        else if(selected.length === 0){
            setDeselectAll(true)
        }
    }, [selected, products?.length])

    const resetSelection = () => {
        setDeselectAll(true)
        setSelected([])
        setIsAllChecked(false)
    }

    const handleDelete = () => {
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
                                setDeselectAll={setDeselectAll}
                                setIsAllChecked={setIsAllChecked}
                                handleDelete={handleDelete}
                            >
                            </SelectBar>
                        </div>
                    }
                    
                    <div className="col-lg-12 admin-products-body">
                        <div className="row pb-5">
                            {
                                products.map((product,index) => (
                                    <AdminProductItem 
                                        key={index} 
                                        isAllChecked={isAllChecked} 
                                        setSelected={setSelected} 
                                        deselectAll={deselectAll}
                                        selected={selected} 
                                        products={products}
                                        product={product} >
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