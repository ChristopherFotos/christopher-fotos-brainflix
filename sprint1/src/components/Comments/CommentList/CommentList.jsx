import React from 'react'
import Comment from '../Comment/Comment'
import '../Comments.scss'

export default function CommentList() {
    return (
        <div className="comments__list" id="comment-container">
            {/* Comments will be rendered dynamically here*/}
            <Comment></Comment>
        </div>
    )
}
