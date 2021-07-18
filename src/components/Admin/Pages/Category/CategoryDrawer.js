import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GrClose } from "react-icons/gr";
import { FaCloudUploadAlt } from "react-icons/fa";
import './Category.css'
import {useDropzone} from 'react-dropzone';
import { useForm } from "react-hook-form";
import { useItem } from '../../../../contexts/ItemContext';

const CategoryDrawer = ({category, isCategoryDrawerOpen, handleCategoryDrawerClose}) => {

    const { register, handleSubmit, reset } = useForm();
    const {setLoading, setCategoryChange} = useItem();

    const [files, setFiles] = useState([])
    const [categoryImage, setImage] = useState([])
    const processDrop = (pics) =>{
        setFiles(pics)
        setImage(pics.map((file,index) => (
            <img key={index} src={URL.createObjectURL(file)} alt="preview" />
        )))
    }

    const {fileRejections, getRootProps, getInputProps} = useDropzone({
        onDrop: processDrop,
        accept: 'image/jpeg, image/png',
        maxFiles:1,
    });

    const onSubmit = data => {
        if(files.length > 0 || category?.img){
            const formData = new FormData()
            formData.append('file', files[0])
            let apiURL = ""
            if(!category){
                apiURL = 'http://localhost:4000/addCategory'
            }
            else{
                apiURL = 'http://localhost:4000/updateCategory/'+category._id
            }
            
            formData.append('data', JSON.stringify(data))
            setLoading(true)
            
            fetch(apiURL, {
                method: category? 'PUT' : 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                    reset()
                    setCategoryChange(true)
                    setCategoryChange(false)
                    console.log(data)
                }
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                alert(error.message)
            })
            closeDrawer()
        } 
        else{
            alert("Please upload an image")
        }
    }

    const closeDrawer = () => {
        setImage([])
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
                                        category && files.length === 0 &&
                                        <div className="dropzone-img-container">
                                            {  
                                                <img className="p-2" src={`data:image/jpeg;base64,${category.img.img}`} alt="" />
                                            }
                                            
                                        </div>
                                    }
                                    {
                                        categoryImage.length > 0 && 
                                        <div className="dropzone-img-container">
                                            {categoryImage}
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
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" {...register("name")} name="name" id="name" aria-describedby="name" defaultValue={category?category.name:""} required/>
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="categorySlug">Slug</label>
                                    <input type="text" className="form-control" {...register("categorySlug")} name="categorySlug" id="categorySlug" defaultValue={category?category.slug:""}  required/>
                                </div> */}
                                <div className="form-group">
                                    <label htmlFor="type">Parent</label>
                                    <select type="text" className="form-control" {...register("type")} name="type" id="type" defaultValue={category?category.type:""} aria-describedby="type" required>
                                        <option value="Grocery">Grocery</option>
                                        <option value="Make Up">Make Up</option>
                                        <option value="Home">Home</option>
                                        <option value="Meat">Meat</option>
                                    </select>
                                </div>
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