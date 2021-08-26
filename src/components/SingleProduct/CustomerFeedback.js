import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { getComments, inputComment } from '../../utils/network';
import Loading from '../Loading/Loading';
import CommentSection from './CommentSection';

const CustomerFeedback = ({productId}) => {

    const { register, handleSubmit, reset} = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = data => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user')) 
        const newComment = {
            comment: data.comment,
            productId: productId
        }

        inputComment(newComment, user.token)
        .then(result => {
            setComments(result)
            setLoading(false)
            reset()
        })
        
    }

    const [comments, setComments] = useState([])

    useEffect(() => {
        setLoading(true)
        getComments(productId)
        .then(result => {
            setComments(result)
            setLoading(false)
        })
    },[])

    return (
        <>
        <div className="pt-4 pl-4 pr-4 comment-input">
            <Loading loading={loading} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                    <input type="text" name="comment" id="comment" className="form-control" placeholder="Your Comment" {...register("comment")} aria-label="user's comment" aria-describedby="comment" required />
                    <div className="input-group-append">
                        <button className="input-group-text">Upload</button>
                    </div>
                </div>
            </form>
        </div>
        
        <CommentSection comments={comments} />
        </>
    );
};

export default CustomerFeedback;