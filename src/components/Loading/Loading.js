import React from 'react';

const Loading = ({loading}) => {
    return (
        <>
        {
            loading && 
            <div className="text-center mt-3 mb-3">
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }
        
        </>
    );
};

export default Loading;