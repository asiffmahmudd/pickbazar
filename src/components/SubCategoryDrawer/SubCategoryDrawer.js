import { Drawer } from '@material-ui/core';
import React from 'react';

const SubCategoryDrawer = ({filterWithCategory, setSubCategory, subCategoryList, isSubCategoryDrawerOpen, handleSubCategoryDrawerClose}) => {

    const handleClick = (subCategory) => {
        setSubCategory(subCategory)
        filterWithCategory(subCategory)
    }

    return (
        <Drawer 
            className="sub-category-drawer drawer" 
            anchor={"right"} 
            open={isSubCategoryDrawerOpen} 
            onClose={handleSubCategoryDrawerClose}
        > 
            <div className="container p-5">
                <div className="row">
                    {
                        subCategoryList.map(item => {
                            return (
                                <div className="col-lg-2 subCategory-item">
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