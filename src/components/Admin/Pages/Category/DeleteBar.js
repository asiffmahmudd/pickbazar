import React from 'react';

const DeleteBar = ({handleBulkDelete}) => {
    return (
        <div className="select-bar mt-2 bg-white p-3">
            <div className="row pl-2">
                <div className="ml-2 mr-2 mt-1 mb-1">
                    <button className="btn delete-select-btn" onClick={handleBulkDelete}>Delete Selected</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteBar;