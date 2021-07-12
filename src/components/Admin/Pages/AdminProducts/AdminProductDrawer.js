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
    const [productImage, setImages] = useState([])
    const processDrop = (pics) =>{
        setFiles(pics)
        setImages(pics.map((pic,index) => (
            <img key={index} src={URL.createObjectURL(pic)} alt="preview" />
        )))
    }

    const {fileRejections, getRootProps, getInputProps} = useDropzone({
        onDrop: processDrop,
        accept: 'image/jpeg, image/png',
        maxFiles:4,
    });

    const onSubmit = data => {
        if(files.length > 0 || product?.img){
            data.tags = selectedValues
            const formData = new FormData()
            files.map((file,index) => formData.append('file'+index, file))
            
            formData.append('data', JSON.stringify(data))
            fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            setImages([])
            setFiles([])
            reset()
            handleProductDrawerClose()
        } 
        else{
            alert("Please upload at least one image")
        }
    }

    const closeDrawer = () => {
        setImages([])
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
            <Drawer 
                className="add-product-drawer drawer" 
                anchor={"right"} 
                open={isProductDrawerOpen} 
                onClose={closeDrawer}
            > 
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
                                                product?.img.map((pic,index) => <img key={index} src={`data:image/jpeg;base64,${pic.img}`} alt="preview" />)
                                            }
                                            
                                        </div>
                                    }
                                    {
                                        productImage.length > 0 && 
                                        <div className="dropzone-img-container">
                                            {productImage}
                                        </div>
                                    }
                                    {
                                        fileRejectionItems.length > 0 &&
                                        <p className="text-danger mt-3">You can upload 4 images max</p>
                                    }
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-lg-4">
                                    <p className="drawer-body-section-title">Add your Product description and necessary information from here</p>
                                </div>
                                <div className="col-lg-8 bg-white product-info" key={product}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            {...register("name")} 
                                            name="name" 
                                            id="name" 
                                            aria-describedby="name" 
                                            value={product?.name} 
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="desc">Description</label>
                                        <textarea 
                                            type="text" 
                                            className="form-control" 
                                            {...register("desc")} 
                                            name="desc" 
                                            id="desc" 
                                            defaultValue={product?.desc}  
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="unit">Unit</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            {...register("unit")} 
                                            name="unit" 
                                            id="unit" 
                                            aria-describedby="unit" 
                                            defaultValue={product?.unit} 
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="price">Price</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            {...register("price")} 
                                            name="price" 
                                            id="price" 
                                            aria-describedby="price" 
                                            defaultValue={product?.price} 
                                            step="any" 
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="sale">Sale Price</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            {...register("sale")} 
                                            name="sale" 
                                            id="sale" 
                                            step="any" 
                                            aria-describedby="sale"
                                            defaultValue={product?.sale} 
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="discount">Discount In Percent</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            {...register("discount")} 
                                            name="discount" 
                                            id="discount" 
                                            step="any" 
                                            aria-describedby="discount" 
                                            defaultValue={product?.discount} 
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="quantity">Product Quantity</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            {...register("quantity")}
                                            name="quantity" 
                                            id="quantity" 
                                            aria-describedby="quantity" 
                                            defaultValue={product?.quantity} 
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category">Category</label>
                                        <select 
                                            type="text" 
                                            className="form-control" 
                                            {...register("category")} 
                                            name="category" 
                                            id="category" 
                                            aria-describedby="category" 
                                            defaultValue={product?.category} 
                                            required
                                        >
                                            {
                                                categories.map((category,index) => <option key={index} value={category.name}>{category.name}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group category-multiSelect">
                                        <label htmlFor="tags">Tags</label>
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