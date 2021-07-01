import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GrClose } from "react-icons/gr";
import { FaCloudUploadAlt } from "react-icons/fa";
import './Category.css'
import {useDropzone} from 'react-dropzone';
import { useForm } from "react-hook-form";

const CategoryDrawer = ({category, isCategoryDrawerOpen, handleCategoryDrawerClose}) => {

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
        maxFiles:1,
    });

    const onSubmit = data => {
        data.img =  files.length > 0? files: category.img 
        console.log(data)
        reset()
        handleCategoryDrawerClose()
    }

    const closeDrawer = () => {
        setFiles([])
        reset()
        handleCategoryDrawerClose();
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
            <Drawer className="category-drawer drawer" anchor={"right"} open={isCategoryDrawerOpen} onClose={closeDrawer}> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="drawer-container">
                    
                    <div className="drawer-header">
                    <GrClose className="drawer-close hover-pointer" onClick={closeDrawer}></GrClose>
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
                                        category?.img.length > 0 && files.length === 0 &&
                                        <div className="dropzone-img-container">
                                            {   
                                                category?.img.map((pic,index) => <img key={index} src={pic} alt="preview" />)
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
                            <div className="cancel-btn btn w-100" onClick={closeDrawer}>Cancel</div>
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