import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { GrClose } from "react-icons/gr";
import './ProductDrawer.css'

const ProductDrawer = ({product, handleClose, isOpen}) => {

    return (
        <div>
            <Drawer className="add-product-drawer" anchor={"right"} open={isOpen} onClose={() => handleClose()}>
                
                
                
                
                <div className="drawer-container">
                    
                    <div className="drawer-header">
                    <GrClose className="add-product-close" onClick={()=>handleClose()}></GrClose>
                        <h3>Update Product</h3>
                    </div>
                    
                    <div className="drawer-body">
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <p>Upload your Product image here</p>
                            </div>
                            <div className="col-lg-8 bg-white">
                                <div>
                                    <h1>asdsdf</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="drawer-footer bg-white row">
                            <div className="col-6">
                                <button className="cancel-btn btn w-100" onClick={()=>handleClose()}>Cancel</button>
                            </div>
                            <div className="col-6">
                                <button className="update-btn btn w-100">Update Product</button>
                            </div>
                        </div>
                    
                </div>

            </Drawer>
        </div>
    );
};

export default ProductDrawer;