import React from 'react'
import CommentsForm from './CommentsForm/CommentsForm'
import CommentList from './CommentList/CommentList'
import './Comments.scss'

export default function Comments(props) {
    return (
        <section className = 'comments'>
            <CommentsForm></CommentsForm>
            <CommentList comments = {props.comments}></CommentList>
        </section>
    )
}
