import React from 'react'
import CommentsForm from './CommentsForm/CommentsForm'
import CommentList from './CommentList/CommentList'
import './Comments.scss'

export default function Comments() {
    return (
        <section className = 'comments'>
            <CommentsForm></CommentsForm>
            <CommentList></CommentList>
        </section>
    )
}
