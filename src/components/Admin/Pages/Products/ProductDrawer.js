import React, {useCallback, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GrClose } from "react-icons/gr";
import { FaCloudUploadAlt } from "react-icons/fa";
import './ProductDrawer.css'
import {useDropzone} from 'react-dropzone';
import { useEffect } from 'react';
import { useProductDrawer } from '../../../../contexts/ProductDrawerContext';

const ProductDrawer = () => {

    const {product, handleProductDrawerClose, isProductDrawerOpen} = useProductDrawer()
    const onDrop = useCallback(acceptedFiles => {
        handleChange(acceptedFiles[0])
      }, [])

    const handleChange = (file) => {
        setPreview(URL.createObjectURL(file))
    }
    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png',
        maxFiles:1,
    });

    const [preview, setPreview] = useState(product?.img)
    useEffect(() => {
        setPreview(product?.img)
    },[product])
    
    return (
        <div>
            <Drawer className="add-product-drawer" anchor={"right"} open={isProductDrawerOpen} onClose={() => handleProductDrawerClose()}> 
                <div className="drawer-container">
                    
                    <div className="drawer-header">
                    <GrClose className="add-product-close hover-pointer" onClick={()=>handleProductDrawerClose()}></GrClose>
                        <h3>
                            {
                                product ? 'Update Product':'Add Product'
                            }
                        </h3>
                    </div>
                    
                    <div className="drawer-body">
                        <div className="row">
                            <div className="col-lg-4">
                                <p className="drawer-body-section-title">Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white dropzone-container">
                                <div {...getRootProps({className: 'dropzone hover-pointer'})}>
                                    <input {...getInputProps()}  />
                                    <FaCloudUploadAlt color="rgb(230, 230, 230)" size={40}></FaCloudUploadAlt>
                                    <p className="dropzone-label"><span>Drag/Upload your</span> image here</p>
                                </div>
                                {
                                    preview &&
                                    <div className="dropzone-img-container">
                                        <img src={preview} alt="preview" />
                                    </div>
                                }
                                
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <p className="drawer-body-section-title">Add your Product description and necessary information from here</p>
                            </div>
                            <div className="col-lg-8 bg-white product-info">
                                
                                <form>
                                    <div class="form-group">
                                        <label for="productName">Name</label>
                                        <input type="text" class="form-control" id="productName" aria-describedby="productName" defaultValue={product?product.name:""} />
                                    </div>
                                    <div class="form-group">
                                        <label for="productDescription">Description</label>
                                        <textarea type="text" class="form-control" id="productDescription"  />
                                    </div>
                                    <div class="form-group">
                                        <label for="productUnit">Unit</label>
                                        <input type="text" class="form-control" id="productUnit" aria-describedby="productUnit" />
                                    </div>
                                    <div class="form-group">
                                        <label for="productPrice">Price</label>
                                        <input type="number" class="form-control" id="productPrice" aria-describedby="productPrice" defaultValue={product?product.price:""} />
                                    </div>
                                    <div class="form-group">
                                        <label for="productSaleprice">Sale Price</label>
                                        <input type="text" class="form-control" id="productSaleprice" aria-describedby="productSaleprice" />
                                    </div>
                                    <div class="form-group">
                                        <label for="productDiscount">Discount In Percent</label>
                                        <input type="text" class="form-control" id="productDiscount" aria-describedby="productDiscount" />
                                    </div>
                                    <div class="form-group">
                                        <label for="productQuantity">Product Quantity</label>
                                        <input type="text" class="form-control" id="productQuantity" aria-describedby="productQuantity" />
                                    </div>
                                    <div class="form-group">
                                        <label for="productType">Type</label>
                                        <input type="text" class="form-control" id="productType" aria-describedby="productType" />
                                    </div>
                                    <div class="form-group">
                                        <label for="productCategories">Categories</label>
                                        <input type="text" class="form-control" id="productCategories" aria-describedby="productCategories" />
                                    </div>
                                    {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    <div className="drawer-footer bg-white row">
                        <div className="col-6">
                            <button className="cancel-btn btn w-100" onClick={()=>handleProductDrawerClose()}>Cancel</button>
                        </div>
                        <div className="col-6">
                            <button className="update-btn btn w-100">{product ? 'Update Product':'Add Product'}</button>
                        </div>
                    </div>
                    
                </div>

            </Drawer>
        </div>
    );
};

export default ProductDrawer;