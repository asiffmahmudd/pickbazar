import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import CategoryDrawer from './CategoryDrawer.js';
import { useState } from 'react';
import { useEffect } from 'react';

const CategoryItem = ({category, categories, isAllChecked, setSelected, deselectAll, selected}) => {

    const [isCategoryDrawerOpen, setCategoryDrawerOpen] = useState(false);

    const handleCategoryDrawerOpen = () => {
        setCategoryDrawerOpen(true)
    }

    const handleCategoryDrawerClose = () => {
        setCategoryDrawerOpen(false);
    }

    const handleCategoryDelete = () => {

    }

    const [isChecked, setIsChecked] = useState(isAllChecked);

    const changeCheck = () => {
        if(!isChecked){
            const newList = [...selected, category]
            setSelected(newList)
        }
        else{
            const newList = selected.filter(cat => cat.id !== category.id)
            setSelected(newList)
        }
        setIsChecked(!isChecked)
    }

    useEffect(() => {
         if(isAllChecked){
            setSelected(categories)
            setIsChecked(true)
         }
         if(deselectAll){
             setSelected([])
             setIsChecked(false)
         }
    }, [isAllChecked, deselectAll, setSelected, categories])


    return (
        <>
            <tr>
                <td>
                    <input type="checkbox" className="mt-2 ml-2" checked={isChecked} onChange={changeCheck} name="category-item" value={category}/>
                </td>
                <th scope="row">{category.id}</th>
                <td>{category.img}</td>
                <td>{category.name}</td>
                {/* <td>{category.slug}</td> */}
                <td>{category.type}</td>
                <td>
                    <BiEdit color="green" onClick={()=> handleCategoryDrawerOpen(category)} className="mr-2 hover-pointer"></BiEdit>
                    <BsTrash color='red' onClick={() => handleCategoryDelete(category)} className="hover-pointer"></BsTrash>
                </td>
            </tr>
            <CategoryDrawer category={category} isCategoryDrawerOpen={isCategoryDrawerOpen} handleCategoryDrawerClose={handleCategoryDrawerClose}></CategoryDrawer>
        </>
    );
};

export default CategoryItem;