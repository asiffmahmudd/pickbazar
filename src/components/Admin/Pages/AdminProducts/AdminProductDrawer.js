import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GrClose } from "react-icons/gr";
import { FaCloudUploadAlt } from "react-icons/fa";
import './AdminProductDrawer.css'
import {useDropzone} from 'react-dropzone';
import { useForm } from "react-hook-form";
import { Multiselect } from 'multiselect-react-dropdown';
// import categories from '../../../../data/categories';
import tags from '../../../../data/tags';
import { useItem } from '../../../../contexts/ItemContext';
import { addProduct } from '../../../../utils/network';

const AdminProductDrawer = ({product, handleProductDrawerClose, isProductDrawerOpen}) => {

    const {setProductChange, setLoading, categories} = useItem()
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
    const [productImage, setProductImages] = useState([])
    const processDrop = (pics) =>{
        setFiles(pics)
        setProductImages(pics.map((pic,index) => (
            <img key={index} src={URL.createObjectURL(pic)} alt="preview" />
        )))
    }

    const {fileRejections, getRootProps, getInputProps} = useDropzone({
        onDrop: processDrop,
        accept: 'image/jpeg, image/png',
        maxFiles:4,
    });

    const closeDrawer = () => {
        setProductImages([])
        setFiles([])
        reset()
        handleProductDrawerClose();
    }
    
    const saveToDatabase = (data) => {
        const {name, desc, unit, price, discount_percentage, sale_price, category_id, sub_category_id, quantity, tags, images} = data
        const formData = new FormData();
        
        formData.append('name',name)
        formData.append('desc',desc)
        formData.append('unit',unit)
        formData.append('price',price)
        formData.append('discount_percentage',discount_percentage)
        formData.append('sale_price',sale_price)
        formData.append('category_id',category_id)
        formData.append('sub_category_id',sub_category_id)
        formData.append('quantity',quantity)
        // images.map(image => formData.append('images',image))
        // formData.append('tags[]',tags)

        Array.from(tags).forEach(tag => {
            console.log(tag)
            formData.append("tags[]", tag);
        });

        Array.from(images).forEach(image => {
            console.log(image)
            formData.append("images[]", image);
        });
        
        
        const user = JSON.parse(localStorage.getItem('user')) 
        addProduct(formData, user.token)
        .then(result => {
            setProductChange(true)
            setProductChange(false)
            setLoading(false)
        })


        // let apiURL = ""
        // if(!product){
        //     apiURL = 'https://pickbazar-clone.herokuapp.com/addproduct'
        // }
        // else{
        //     apiURL = 'https://pickbazar-clone.herokuapp.com/updateProduct/'+product.id
        // }
        // fetch(apiURL, {
        //     method: product? 'PUT' : 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     setLoading(false)
        //     if(data){
        //         reset()
        //         setProductChange(true)
        //         setProductChange(false)
        //     }
        // })
        // .catch(error => {
        //     setLoading(false)
        //     alert(error.message)
        // })
    }
    
    const onSubmit = data => {
        setLoading(true)
        data.tags = selectedValues
        if(files.length > 0){
            // const imageData = new FormData();
            // imageData.set('key', '0c9c52f3c2c70e376333024c7dd177e2');
            // const promises = []
            // const imageURLs = []
            // files.map((file) => {
            //     imageData.append('image', file);
            //     promises.push(fetch('https://api.imgbb.com/1/upload', {
            //         method: 'POST',
            //         body: imageData
            //     }))
            //     return 0
            // })
            // Promise.all(promises)
            // .then(responses =>
            // Promise.all(responses.map(response => response.json()))
            // ).then(result =>{
            //     result.map(item=> imageURLs.push(item.data.display_url))
            //     data.img = imageURLs
            //     saveToDatabase(data)
            // }).catch(err =>
            //     alert(err.message)
            // );

            data.images = files
            saveToDatabase(data)
            
            closeDrawer()
        } 
        else if(product?.img){
            saveToDatabase(data)
            closeDrawer()
        }
        else{
            setLoading(false)
            alert("Please upload at least one image")
        }
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
    
    const [subCategories, setSubCategories] = useState([])
    const handleCategoryChange = (e) => {
        const categoryId = Number(e.target.value)
        const category = categories.find(item => Number(item.id) === categoryId)
        setSubCategories(category.subCategory)
    }
    
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
                                                product?.img.map((pic,index) => <img key={index} src={pic} alt="preview" />)
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
                                            defaultValue={product?.name} 
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
                                        <label htmlFor="sale_price">Sale Price</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            {...register("sale_price")} 
                                            name="sale_price" 
                                            id="sale_price" 
                                            step="any" 
                                            aria-describedby="sale_price"
                                            defaultValue={product?.sale} 
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="discount_percentage">Discount In Percent</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            {...register("discount_percentage")} 
                                            name="discount_percentage" 
                                            id="discount_percentage" 
                                            step="any" 
                                            aria-describedby="discount_percentage" 
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
                                        <label htmlFor="category_id">Category</label>
                                        <select 
                                            type="text" 
                                            className="form-control" 
                                            {...register("category_id")} 
                                            name="category_id" 
                                            id="category_id" 
                                            aria-describedby="category_id" 
                                            onChange={handleCategoryChange}
                                            // defaultValue={product?.category?.id} 
                                            required
                                        >
                                            {
                                                categories.map((category,index) => <option key={index} value={category.id}>{category.name}</option>)
                                            }
                                        </select>
                                    </div><div className="form-group">
                                        <label htmlFor="sub_category_id">Sub Category</label>
                                        <select 
                                            type="text" 
                                            className="form-control" 
                                            {...register("sub_category_id")} 
                                            name="sub_category_id" 
                                            id="sub_category_id" 
                                            aria-describedby="sub_category_id" 
                                            defaultValue={product?.sub_category_id } 
                                        >
                                            <option value="" disabled></option>
                                            {
                                                subCategories.map((subcategory,index) => <option key={index} value={subcategory.id}>{subcategory.name}</option>)
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