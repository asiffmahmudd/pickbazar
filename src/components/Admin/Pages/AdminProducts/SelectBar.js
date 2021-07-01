import React from 'react';

const SelectBar = ({handleDelete, setDeselectAll, setIsAllChecked}) => {

    return (
        <div className="select-bar mt-2 bg-white p-3">
            <div className="row pl-2">
                <div className="ml-2 mr-2 mt-1 mb-1">
                    <button className="btn select-btn" onClick={() => setIsAllChecked(true)}>Select All</button>
                </div>
                <div className="mr-2 ml-2 mt-1 mb-1">
                    <button className="btn deselect-btn" onClick={() => setDeselectAll(true)}>Deselect All</button>
                </div>
                <div className="ml-2 mr-2 mt-1 mb-1">
                    <button className="btn delete-select-btn" onClick={handleDelete}>Delete Selected</button>
                </div>
            </div>
        </div>
    );
};

export default SelectBar;