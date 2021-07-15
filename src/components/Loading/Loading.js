import React from 'react';
import './Loading.css'

const Loading = ({loading}) => {
    return (
        <>
        {
            loading && 
            <div className="text-center spinner-container mt-3 mb-3 d-flex justify-content-center align-items-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }
        
        </>
    );
};

export default Loading;