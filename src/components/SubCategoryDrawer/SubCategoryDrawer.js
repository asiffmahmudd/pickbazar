import { Drawer } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const SubCategoryDrawer = ({filterWithCategory, setSubCategory, subCategoryList, isSubCategoryDrawerOpen, handleSubCategoryDrawerClose}) => {

    const handleClick = (subCategory) => {
        setSubCategory(subCategory)
        filterWithCategory(subCategory)
    }

    const [anchorOpen, setAnchorOpen] = useState(window.screen.width)
    useEffect(() => {
        setAnchorOpen(window.screen.width)
    }, [window.screen.width])
    
    return (
        <Drawer 
            className="sub-category-drawer drawer" 
            anchor={anchorOpen > 768 ? "right" : "bottom"} 
            open={isSubCategoryDrawerOpen} 
            onClose={handleSubCategoryDrawerClose}
        > 
            <div className="container p-5">
                <div className="row">
                    <div className="hover-pointer" style={{position:'absolute', left:'10px', top: '10px'}}>
                        <AiOutlineCloseCircle onClick={handleSubCategoryDrawerClose} size={30} />
                    </div>
                    {
                        subCategoryList.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-2 subCategory-item mt-3">
                                    <div className="bg-white p-3 text-center hover-pointer" onClick={()=>handleClick(item.id)}>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Drawer>
    );
};

export default SubCategoryDrawer;