import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';

const CategoryItem = ({category, handleCategoryDrawerOpen, handleCategoryDelete}) => {
    return (
        <tr>
            <th scope="row">{category.id}</th>
            <td>{category.img}</td>
            <td>{category.name}</td>
            <td>{category.slug}</td>
            <td>{category.type}</td>
            <td>
                <BiEdit color="green" onClick={()=> handleCategoryDrawerOpen(category)} className="mr-2 hover-pointer"></BiEdit>
                <BsTrash color='red' onClick={() => handleCategoryDelete(category)} className="hover-pointer"></BsTrash>
            </td>
        </tr>
    );
};

export default CategoryItem;