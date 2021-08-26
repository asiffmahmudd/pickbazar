import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GrClose } from "react-icons/gr";
import { FaCloudUploadAlt } from "react-icons/fa";
import './Category.css'
import {useDropzone} from 'react-dropzone';
import { useForm } from "react-hook-form";
import { useItem } from '../../../../contexts/ItemContext';
import { addCategory, updateCategory } from '../../../../utils/network';

const CategoryDrawer = ({category, parent, isCategoryDrawerOpen, handleCategoryDrawerClose}) => {

    const { register, handleSubmit, reset } = useForm();
    const {setCategoryLoading, setCategoryChange} = useItem();

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

    const {categories} = useItem()

    const saveToDatabase = (data) =>{
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("parent", data.parent);
        if(data.file){
            formData.append("file", data.file);
        }
        const user = JSON.parse(localStorage.getItem('user')) 
        if(!category){
            addCategory(formData, user.token)
            .then(result => {
                reset()
                setCategoryChange(true)
                setCategoryChange(false)
                setCategoryLoading(false)
                closeDrawer()
            })
        }
        else{
            updateCategory(formData, user.token, category.id)
            .then(result => {
                reset()
                setCategoryChange(true)
                setCategoryChange(false)
                setCategoryLoading(false)
                closeDrawer()
            })
            .catch(e => console.log(e.message))
        }

        // let apiURL = ""
        // if(!category){
        //     apiURL = 'https://pickbazar-clone.herokuapp.com/addCategory'
        // }
        // else{
        //     apiURL = 'https://pickbazar-clone.herokuapp.com/updateCategory/'+category.id
        // }
        // fetch(apiURL, {
        //     method: category? 'PUT' : 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if(data){
        //         reset()
        //         setCategoryChange(true)
        //         setCategoryChange(false)
        //     }
        //     setCategoryLoading(false)
        // })
        // .catch(error => {
        //     setCategoryLoading(false)
        //     alert(error.message)
        // })
    }

    const onSubmit = data => {
        setCategoryLoading(true)
        // if(files.length > 0){
        //     const imageData = new FormData();
        //     imageData.set('key', '0c9c52f3c2c70e376333024c7dd177e2');
        //     imageData.append('image', files[0]);
        //     fetch('https://api.imgbb.com/1/upload', {
        //         method: 'POST',
        //         body: imageData
        //     })
        //     .then(response => response.json())
        //     .then(result => {
        //         data.img = result.data.display_url
        //         saveToDatabase(data)
        //     })
        //     .catch(error => {
        //         alert(error)
        //     })
        //     closeDrawer()
        // } 
        if(files.length > 0){
            data.file = files[0]
            saveToDatabase(data)
        }
        else if(category?.img){
            saveToDatabase(data)
            closeDrawer()
        }
        else{
            setCategoryLoading(false)
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
                                                <img className="p-2" src={category.img} alt="" />
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
                                    <select type="text" className="form-control" {...register("parent")} name="parent" id="parent" defaultValue={parent? parent.id:""} aria-describedby="parent" >
                                    <option value=""></option>
                                        {
                                            categories.map((item,index) => {
                                                return <option key={index} value={item.id}>{item.name}</option>
                                            })
                                        }
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