import React from 'react';

const SingleComment = ({comment}) => {
    
    return (
        <>
        <div className="single-comment mb-4">
            <h6 className="m-0">{comment.name}</h6>
            <p>{comment.comment}</p>
        </div>
        <hr />
        </>
    );
};

export default SingleComment;