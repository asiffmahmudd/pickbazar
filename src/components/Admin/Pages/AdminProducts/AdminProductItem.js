import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminProductDrawer from './AdminProductDrawer';

const AdminProductItem = ({product, products, deselectAll, handleSingleDelete, isAllChecked, selected, setSelected}) => {
    // console.log(product)
    const [isProductDrawerOpen, setProductDrawerOpen] = useState(false);
    
    const handleProductDrawerOpen = () => {
        setProductDrawerOpen(true);
    }

    const handleProductDrawerClose = () => {
        setProductDrawerOpen(false);
    }

    const [isChecked, setIsChecked] = useState(false);

    const changeCheck = () => {
        if(!isChecked){
            const newList = [...selected, product]
            setSelected(newList)
        }
        else{
            const newList = selected.filter(pd => pd.id !== product.id)
            setSelected(newList)
        }
        setIsChecked(!isChecked)
    }

    useEffect(() => {
         if(isAllChecked){
            setIsChecked(true)
         }
         if(deselectAll){
            setIsChecked(false)
         }
    }, [isAllChecked, deselectAll, products])

    return (
        <>
        <div className="admin-product-item col-lg-3 col-md-4 col-sm-6 col-12 mt-3 mb-2 hover-pointer">
            <div className="card border-0">
                <input 
                    type="checkbox" 
                    className="mt-2 hover-pointer item-select ml-2" 
                    checked={isChecked} 
                    onChange={changeCheck} 
                    name="product-item" 
                    value={product}
                />
                <div className="admin-product-item-img-container" onClick={() => handleProductDrawerOpen(product)}>
                    <img className="card-img-top" src={product?.img[0]} alt="" />
                    {
                        product?.discount > 0 &&
                        <p className="admin-item-discount">{product.discount}%</p>
                    }
                </div>
                
                <div className="card-body">
                    <div>
                    {
                        product?.discount > 0 &&
                        <>
                            <h5 className="card-title">${product.sale}</h5> 
                            <span className="discount-price">${product.price}</span>
                            
                        </>
                    }
                    {
                        (product.sale == null || product.sale === 0) &&
                        <h5 className="card-title">${product.price}</h5>
                    }
                    </div>
                    <div className="d-flex justify-content-between align-items-center" style={{height:'50px'}}>
                        <p className="card-text" style={{margin:0}}>{product.name}</p>
                        <div className="btn delete-btn hover-pointer" onClick={()=>handleSingleDelete(product.id)}>
                            Delete
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AdminProductDrawer 
            product={product} 
            isProductDrawerOpen={isProductDrawerOpen} 
            handleProductDrawerClose={handleProductDrawerClose}>
        </AdminProductDrawer>
        </>
    );
};

export default AdminProductItem;