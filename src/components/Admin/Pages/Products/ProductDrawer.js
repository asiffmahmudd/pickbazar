import React, {useCallback, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GrClose } from "react-icons/gr";
import { FaCloudUploadAlt } from "react-icons/fa";
import './ProductDrawer.css'
import {useDropzone} from 'react-dropzone';
import { useEffect } from 'react';
import { useProductDrawer } from '../../../../contexts/ProductDrawerContext';
import { useForm } from "react-hook-form";
import { Multiselect } from 'multiselect-react-dropdown';
import categories from '../../../../data/categories';


const ProductDrawer = () => {

    const [options, setOptions] = useState(categories)
    const [selectedValues, setSelectedValues] = useState([])

    const onSelect = (selectedList, selectedItem) => {
        setSelectedValues(selectedList);
    }

    const onRemove = (selectedList, removedItem) => {
        setSelectedValues(selectedList);
    }
    
    
    const {product, handleProductDrawerClose, isProductDrawerOpen} = useProductDrawer()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.img = preview;
        console.log(data)
        reset();
        handleProductDrawerClose()
    }

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
            <Drawer className="add-product-drawer drawer" anchor={"right"} open={isProductDrawerOpen} onClose={() => handleProductDrawerClose()}> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="drawer-container">
                    
                    <div className="drawer-header">
                    <GrClose className="drawer-close hover-pointer" onClick={()=>handleProductDrawerClose()}></GrClose>
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
                                    <input {...getInputProps()}  name="productImg" />
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
                                
                                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                                    <div className="form-group">
                                        <label htmlFor="productName">Name</label>
                                        <input type="text" className="form-control" {...register("productName")} name="productName" id="productName" aria-describedby="productName" defaultValue={product?product.name:""} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productDescription">Description</label>
                                        <textarea type="text" className="form-control" {...register("productDescription")} name="productDescription" id="productDescription"  required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productUnit">Unit</label>
                                        <input type="text" className="form-control" {...register("productUnit")} name="productUnit" id="productUnit" aria-describedby="productUnit" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productPrice">Price</label>
                                        <input type="number" className="form-control" {...register("productPrice")} name="productPrice" id="productPrice" aria-describedby="productPrice" defaultValue={product?product.price:""} step="any" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productSaleprice">Sale Price</label>
                                        <input type="text" className="form-control" {...register("productSaleprice")} name="productSaleprice" id="productSaleprice" aria-describedby="productSaleprice" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productDiscount">Discount In Percent</label>
                                        <input type="text" className="form-control" {...register("productDiscount")} name="productDiscount" id="productDiscount" aria-describedby="productDiscount" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productQuantity">Product Quantity</label>
                                        <input type="text" className="form-control" {...register("productQuantity")} name="productQuantity" id="productQuantity" aria-describedby="productQuantity" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productType">Type</label>
                                        <input type="text" className="form-control" {...register("productType")} name="productType" id="productType" aria-describedby="productType" required />
                                    </div>
                                    <div className="form-group category-multiSelect">
                                        <label htmlFor="productCategories">Categories</label>
                                        {/* <input type="text" className="form-control" {...register("productCategories")} name="productCategories" id="productCategories" aria-describedby="productCategories" required /> */}
                                        <Multiselect
                                            options={options} // Options to display in the dropdown
                                            selectedValues={selectedValues} // Preselected value to persist in dropdown
                                            onSelect={onSelect} // Function will trigger on select event
                                            onRemove={onRemove} // Function will trigger on remove event
                                            displayValue="name" // Property name to display in the dropdown options
                                        />
                                    </div>
                                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                                {/* </form> */}
                            </div>
                        </div>
                        
                    </div>
                    <div className="drawer-footer bg-white row">
                        <div className="col-6">
                            <div className="cancel-btn btn w-100" onClick={()=>handleProductDrawerClose()}>Cancel</div>
                        </div>
                        <div className="col-6">
                            <button type="submit" id="productDrawerFormBtn" className="update-btn btn w-100">{product ? 'Update Product':'Add Product'}</button>
                        </div>
                    </div>
                    
                </div>
                </form>
            </Drawer>
        </div>
    );
};

export default ProductDrawer;