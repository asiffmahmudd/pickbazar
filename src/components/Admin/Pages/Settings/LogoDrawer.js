import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Drawer from '@material-ui/core/Drawer';
import { addLogo } from '../../../../utils/network';
import { useItem } from '../../../../contexts/ItemContext';

const LogoDrawer = ({isLogoDrawerOpen, handleLogoDrawerClose, setLoading}) => {
    const { handleSubmit, reset } = useForm();
    const {setLogoChange} = useItem()

    const onSubmit = data => {
        if(files.length > 0){
            setLoading(true)
            const user = JSON.parse(localStorage.getItem('user'))
            const formData = new FormData()
            formData.append('file', files[0])
            addLogo(formData, user.token)
            .then(result => {
                setLogo(result.url)
                setLoading(false)
                setLogoChange(true)
                setLogoChange(false)
                closeDrawer()
            })
        }
        else{
            alert("Please upload an image")
        }
    };

    const [files, setFiles] = useState([])
    const [logo, setLogo] = useState([])
    const processDrop = (pics) =>{
        setFiles(pics)
        setLogo(pics.map((file,index) => (
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
        setLogo([])
        setFiles([])
        reset()
        handleLogoDrawerClose();
    }

    return (
        <div>
            <Drawer className="category-drawer drawer" anchor={"right"} open={isLogoDrawerOpen} onClose={closeDrawer}> 
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="drawer-container">
                        
                        <div className="drawer-header">
                        <GrClose className="drawer-close hover-pointer" onClick={closeDrawer}></GrClose>
                            <h3>Update Logo</h3>
                        </div>
                        
                        <div className="drawer-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <p className="drawer-body-section-title">Upload Your Logo here</p>
                                </div>
                                <div className="col-lg-8 bg-white dropzone-container">
                                    <div {...getRootProps({className: 'dropzone hover-pointer'})}>
                                        <input {...getInputProps()}  name="productImg" />
                                        <FaCloudUploadAlt color="rgb(230, 230, 230)" size={40}></FaCloudUploadAlt>
                                        <p className="dropzone-label"><span>Drag/Upload your</span> image here</p>
                                    </div>
                                        {/* {
                                            currentLogo && files.length === 0 &&
                                            <div className="dropzone-img-container">
                                                {  
                                                    <img className="p-2" src={currentLogo} alt="" />
                                                }
                                                
                                            </div>
                                        } */}
                                        {
                                            logo.length > 0 && 
                                            <div className="dropzone-img-container">
                                                {logo}
                                            </div>
                                        }
                                        {
                                            fileRejectionItems.length > 0 &&
                                            <p className="text-danger mt-3">You can upload 1 image max</p>
                                        }
                                    
                                </div>
                            </div>
                        </div>
                        <div className="drawer-footer bg-white row">
                            <div className="col-6">
                                <div className="cancel-btn btn w-100" onClick={closeDrawer}>Cancel</div>
                            </div>
                            <div className="col-6">
                                <button type="submit" id="productDrawerFormBtn" className="update-btn btn w-100">Update Logo</button>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </Drawer>
        </div>
    );
};

export default LogoDrawer;