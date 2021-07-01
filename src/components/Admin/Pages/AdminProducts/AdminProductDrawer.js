import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GrClose } from "react-icons/gr";
import { FaCloudUploadAlt } from "react-icons/fa";
import './AdminProductDrawer.css'
import {useDropzone} from 'react-dropzone';
import { useForm } from "react-hook-form";
import { Multiselect } from 'multiselect-react-dropdown';
import categories from '../../../../data/categories';
import tags from '../../../../data/tags';

const AdminProductDrawer = ({product, handleProductDrawerClose, isProductDrawerOpen}) => {

    const [options, setOptions] = useState(tags)
    const [selectedValues, setSelectedValues] = useState(product?.tags)
    const onSelect = (selectedList, selectedItem) => {
        setSelectedValues(selectedList);
    }
    const onRemove = (selectedList, removedItem) => {
        setSelectedValues(selectedList);
    }
    
    const { register, handleSubmit, reset } = useForm();

    const [files, setFiles] = useState([])
    const processDrop = (pics) =>{
        setFiles(pics.map((file,index) => (
            <img key={index} src={URL.createObjectURL(file)} alt="preview" />
        )))
    }

    const {fileRejections, getRootProps, getInputProps} = useDropzone({
        onDrop: processDrop,
        accept: 'image/jpeg, image/png',
        maxFiles:4,
    });

    const onSubmit = data => {
        data.img =  files.length > 0? files: product.img 
        console.log(data)
        reset()
        handleProductDrawerClose()
    }

    const closeDrawer = () => {
        setFiles([])
        reset()
        handleProductDrawerClose();
    }
    
    const fileRejectionItems = fileRejections.map(({ file, errors }) => { 
        return (
          <li key={file.path}>
               <ul>
                 {errors.map(e => <li key={e.code}>{e.message}</li>)}
              </ul>
          </li>
        ) 
    });
    
    return (
        <div>
            <Drawer className="add-product-drawer drawer" anchor={"right"} open={isProductDrawerOpen} onClose={closeDrawer}> 
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="drawer-container">
                        
                        <div className="drawer-header">
                        <GrClose className="drawer-close hover-pointer" onClick={closeDrawer}></GrClose>
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
                                        product?.img.length > 0 && files.length === 0 &&
                                        <div className="dropzone-img-container">
                                            {   
                                                product?.img.map((pic,index) => <img key={index} src={pic} alt="preview" />)
                                            }
                                            
                                        </div>
                                    }
                                    {
                                        files.length > 0 && 
                                        <div className="dropzone-img-container">
                                            {files}
                                        </div>
                                    }
                                    {
                                        fileRejectionItems.length > 0 &&
                                        <p className="text-danger mt-3">You can upload 1 image max</p>
                                    }
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-lg-4">
                                    <p className="drawer-body-section-title">Add your Product description and necessary information from here</p>
                                </div>
                                <div className="col-lg-8 bg-white product-info" key={product}>
                                    <div className="form-group">
                                        <label htmlFor="productName">Name</label>
                                        <input type="text" className="form-control" {...register("productName")} name="productName" id="productName" aria-describedby="productName" value={product?.name} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productDescription">Description</label>
                                        <textarea type="text" className="form-control" {...register("productDescription")} name="productDescription" id="productDescription" defaultValue={product?.desc}  required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productUnit">Unit</label>
                                        <input type="text" className="form-control" {...register("productUnit")} name="productUnit" id="productUnit" aria-describedby="productUnit" defaultValue={product?.unit} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productPrice">Price</label>
                                        <input type="number" className="form-control" {...register("productPrice")} name="productPrice" id="productPrice" aria-describedby="productPrice" defaultValue={product?.price} step="any" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productSaleprice">Sale Price</label>
                                        <input type="number" className="form-control" {...register("productSaleprice")} name="productSaleprice" id="productSaleprice" step="any" aria-describedby="productSaleprice" defaultValue={product?.sale} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productDiscount">Discount In Percent</label>
                                        <input type="number" className="form-control" {...register("productDiscount")} name="productDiscount" id="productDiscount" step="any" aria-describedby="productDiscount" defaultValue={product?.discount} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productQuantity">Product Quantity</label>
                                        <input type="number" className="form-control" {...register("productQuantity")} name="productQuantity" id="productQuantity" aria-describedby="productQuantity" defaultValue={product?.quantity} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productType">Type</label>
                                        <select type="text" className="form-control" {...register("productType")} name="productType" id="productType" aria-describedby="productType" defaultValue={product?.type} required>
                                            {
                                                categories.map((category,index) => <option key={index} value={category.name}>{category.name}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group category-multiSelect">
                                        <label htmlFor="productCategories">Categories</label>
                                        <Multiselect
                                            options={options} // Options to display in the dropdown
                                            selectedValues={product?.tags} // Preselected value to persist in dropdown
                                            onSelect={onSelect} // Function will trigger on select event
                                            onRemove={onRemove} // Function will trigger on remove event
                                            displayValue="name" // Property name to display in the dropdown options
                                        />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="drawer-footer bg-white row">
                            <div className="col-6">
                                <div className="cancel-btn btn w-100" onClick={closeDrawer}>Cancel</div>
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

export default AdminProductDrawer;