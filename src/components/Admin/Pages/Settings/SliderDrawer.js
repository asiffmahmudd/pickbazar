import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Drawer from '@material-ui/core/Drawer';
import { addSlider, deleteSlider } from '../../../../utils/network';
import { IoTrashOutline } from 'react-icons/io5';

const SliderDrawer = ({ setSliderLoading, isSliderDrawerOpen, handleSliderDrawerClose, currentImages, setSliderChange}) => {
    
    const handleSliderImageDelete = (id) =>{
        setSliderLoading(true)
        const user = JSON.parse(localStorage.getItem('user')) 
        deleteSlider(id, user.token)
        .then(result => {
            console.log(result)
            setSliderChange(false)
            setSliderChange(true)
            setSliderLoading(false)
            closeDrawer()
        })
        .catch(e => {
            setSliderLoading(false)
        })
    }

    const { handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if(files.length > 0){
            setSliderLoading(true)
            const user = JSON.parse(localStorage.getItem('user'))
            const formData = new FormData()
            formData.append('file', files[0])
            addSlider(formData, user.token)
            .then(result => {
                setSliderChange(true)
                setSliderChange(false)
                setSliderLoading(false)
                closeDrawer()
            })
        }
        else{
            alert("Please upload an image")
        }
    };

    const [files, setFiles] = useState([])
    const [images, setImages] = useState([])
    const processDrop = (pics) =>{
        setFiles(pics)
        setImages(pics.map((file,index) => (
            <img key={index} src={URL.createObjectURL(file)} alt="preview" />
        )))
    }

    const {fileRejections, getRootProps, getInputProps} = useDropzone({
        onDrop: processDrop,
        accept: 'image/jpeg, image/png',
        maxFiles:1,
    });

    const fileRejectionItems = fileRejections.map(({ file, errors }) => { 
        return (
          <li key={file.path}>
               <ul>
                 {errors.map(e => <li key={e.code}>{e.message}</li>)}
              </ul>
          </li>
        ) 
    });

    const closeDrawer = () => {
        setImages([])
        setFiles([])
        reset()
        handleSliderDrawerClose();
    }

    return (
        <div>
            <Drawer className="category-drawer drawer" anchor={"right"} open={isSliderDrawerOpen} onClose={closeDrawer}> 
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="drawer-container">
                        
                        <div className="drawer-header">
                        <GrClose className="drawer-close hover-pointer" onClick={closeDrawer}></GrClose>
                            <h3>Update Slider Image</h3>
                        </div>
                        
                        <div className="drawer-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <p className="drawer-body-section-title">Upload Your Images here</p>
                                </div>
                                <div className="col-lg-8 bg-white dropzone-container">
                                    <div {...getRootProps({className: 'dropzone hover-pointer'})}>
                                        <input {...getInputProps()}  name="productImg" />
                                        <FaCloudUploadAlt color="rgb(230, 230, 230)" size={40}></FaCloudUploadAlt>
                                        <p className="dropzone-label"><span>Drag/Upload your</span> image here</p>
                                    </div>
                                        {
                                            currentImages && files.length === 0 &&
                                            <div className="dropzone-img-container">
                                                {   
                                                    currentImages?.map((pic,index) => {
                                                        return(
                                                            <span className="admin-slider-preview">
                                                                <img key={index} src={pic.img} alt="preview" />
                                                                <div className="slider-image-delete hover-pointer" onClick={() => handleSliderImageDelete(pic.id)}>
                                                                    <IoTrashOutline color="red" />
                                                                </div>
                                                                
                                                            </span>
                                                        )
                                                    })
                                                }
                                                
                                            </div>
                                        }
                                        {
                                            images.length > 0 && 
                                            <div className="dropzone-img-container">
                                                {   
                                                currentImages?.map((pic,index) => <img className="admin-slider-preview" key={index} src={pic.img} alt="preview" />)
                                                }
                                                {images}
                                            </div>
                                        }
                                        {
                                            fileRejectionItems.length > 0 &&
                                            <p className="text-danger mt-3">You can upload 1 image max at a time</p>
                                        }
                                    
                                </div>
                            </div>
                        </div>
                        <div className="drawer-footer bg-white row">
                            <div className="col-6">
                                <div className="cancel-btn btn w-100" onClick={closeDrawer}>Cancel</div>
                            </div>
                            <div className="col-6">
                                <button type="submit" id="productDrawerFormBtn" className="update-btn btn w-100">Update Slider</button>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </Drawer>
        </div>
    );
};

export default SliderDrawer;