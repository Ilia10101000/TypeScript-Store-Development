import React from 'react';

interface CommentProps{
    name:string
    comment: string
    number: number
}

export default function Comment({name, comment, number}: CommentProps){

    if(name && comment){
        return (
            <div className='comment-item'>
                <div className='comment-name'><b>Name</b>: {name}</div>
                <div className='comment-body'><b>Comment</b>: {comment}</div>
                <div className='comment-number'>{number}</div>
            </div>
        )
    } else {
        return null
    }
}