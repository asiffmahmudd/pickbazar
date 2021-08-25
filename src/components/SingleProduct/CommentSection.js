/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { useState } from 'react';
import SingleComment from './SingleComment';

const CommentSection = ({ comments}) => {

    const [isCollapsed, setIsCollapsed] = useState(true)

    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed)
        // if(!isCollapsed){
        //     window.scroll(0,0)
        // }
    }

    return (
        <>
        <div className="comment-section p-4">
            {
                comments.map((item,index) => {
                    if(index < 2){
                        return(
                            <SingleComment comment={item} />
                        )
                    }
                })
            }

            <div className="collapse" id="moreComments">
                {
                    comments.map((item,index) => {
                        if(index >= 2){
                            return(
                                <SingleComment comment={item} />
                            )
                        }
                    })
                }
            </div>
            {
                comments.length > 2 &&
                <button className="btn collapse-btn mt-1" data-toggle="collapse" href="#moreComments" role="button" aria-expanded="false" aria-controls="moreComments" onClick={handleCollapse}>
                    {isCollapsed ? "See All" : "See Less"}
                </button>
            }
        </div>
        </>
    );
};

export default CommentSection;