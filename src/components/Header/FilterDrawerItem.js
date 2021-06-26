import React from 'react';

const FilterDrawerItem = ({index, changeCategory, category}) => {
    return (
        <div className="col-6 col-md-4 mt-2" style={{padding: '0 5px'}}>
            <div className="filter-drawer-item p-4 text-center" onClick={()=>changeCategory(index, category.name)}>
                {category.img}
                <p className="text-center mt-1">{category.name}</p>
            </div>
        </div>
    );
};

export default FilterDrawerItem;