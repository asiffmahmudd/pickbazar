import React, {useCallback, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GrClose } from "react-icons/gr";
import { FaCloudUploadAlt } from "react-icons/fa";
import './Category.css'
import {useDropzone} from 'react-dropzone';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";

const CategoryDrawer = ({category, isCategoryDrawerOpen, handleCategoryDrawerClose}) => {

    const { register, handleSubmit, reset } = useForm();
    const test = () => {
        reset();
        handleCategoryDrawerClose();
    }

    const onSubmit = data => {
        data.img = preview;
        console.log(data)
        reset();
        handleCategoryDrawerClose()
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

    const [preview, setPreview] = useState(category?.img)
    useEffect(() => {
        setPreview(category?.img)
    },[category])
    
    return (
        <div>
            <Drawer className="category-drawer drawer" anchor={"right"} open={isCategoryDrawerOpen} onClose={() => handleCategoryDrawerClose()}> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="drawer-container">
                    
                    <div className="drawer-header">
                    <GrClose className="drawer-close hover-pointer" onClick={test}></GrClose>
                        <h3>
                            {
                                category ? 'Update Category':'Add Category'
                            }
                        </h3>
                    </div>
                    
                    <div className="drawer-body">
                        <div className="row">
                            <div className="col-lg-4">
                                <p className="drawer-body-section-title">Upload Your Category image here</p>
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
                                        {/* <img src={preview} alt="preview" /> */}
                                        {category.img}
                                    </div>
                                }
                                
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-4">
                                <p className="drawer-body-section-title">Add your Category description and necessary information from here</p>
                            </div>
                            <div className="col-lg-8 bg-white product-info">
                                
                                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                                    <div className="form-group">
                                        <label htmlFor="categoryName">Name</label>
                                        <input type="text" className="form-control" {...register("categoryName")} name="categoryName" id="categoryName" aria-describedby="categoryName" defaultValue={category?category.name:""} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="categorySlug">Slug</label>
                                        <input type="text" className="form-control" {...register("categorySlug")} name="categorySlug" id="categorySlug" defaultValue={category?category.slug:""}  required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="categoryParent">Parent</label>
                                        <select type="text" className="form-control" {...register("categoryParent")} name="categoryParent" id="categoryParent" defaultValue={category?category.type:""} aria-describedby="categoryParent" required>
                                            <option value="Grocery">Grocery</option>
                                            <option value="Make Up">Make Up</option>
                                            <option value="home">Home</option>
                                            <option value="meat">Meat</option>
                                        </select>
                                    </div>
                                    
                                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                                {/* </form> */}
                            </div>
                        </div>
                        
                    </div>
                    <div className="drawer-footer bg-white row">
                        <div className="col-6">
                            <div className="cancel-btn btn w-100" onClick={handleCategoryDrawerClose}>Cancel</div>
                        </div>
                        <div className="col-6">
                            <button type="submit" id="productDrawerFormBtn" className="update-btn btn w-100">{category ? 'Update Category':'Add Category'}</button>
                        </div>
                    </div>
                    
                </div>
                </form>
            </Drawer>
        </div>
    );
};

export default CategoryDrawer;