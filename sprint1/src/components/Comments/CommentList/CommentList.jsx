import React from 'react'
import Comment from '../Comment/Comment'
import '../Comments.scss'

export default function CommentList(props) {
    return (
        <div className="comments__list" id="comment-container">
            {
                props.comments.map(c => {
                    return(
                        <Comment
                            comment = {c}
                        ></Comment>
                    )
                })
            }
        </div>
    )
}
