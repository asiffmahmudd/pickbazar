import React from 'react';
import AdminLayout from '../../AdminLayout/AdminLayout';
import ProductHeader from './AdminProductHeader';
import './AdminProducts.css';
import AdminProductItem from './AdminProductItem';
import products from '../../../../data/products';
import SelectBar from './SelectBar';
import { useState } from 'react';
import { useEffect } from 'react';

const AdminProducts = () => {

    const [isAllChecked, setIsAllChecked] = useState(false)
    const [deselectAll, setDeselectAll] = useState(true);
    const [selected, setSelected] = useState([])

    useEffect(() => {
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
    }, [selected])

    const handleDelete = () => {
        console.log(selected)
    }

    return (
        <AdminLayout >
            <div className="admin-products container-fluid">
                <div className="row">
                    <div className="admin-products-header col-lg-12 mt-5">
                        <ProductHeader></ProductHeader>
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