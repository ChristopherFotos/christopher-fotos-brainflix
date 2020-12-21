import CommentsForm from './CommentsForm/CommentsForm'
import CommentList from './CommentList/CommentList'
import axios from 'axios'
import './Comments.scss'
import React, { Component } from 'react'
import ENV from '../../env'
let {postComment} = ENV;
let {getVideo}    = ENV


export default class Comments extends Component {

    state = {
        comments: this.props.comments.reverse(),
        inputValue: ''
    }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.setState({
                ...this.state,
                comments: this.props.comments.reverse()
            })
        }
    }

    handleChange = e => {
        console.log(this.state.inputValue)
        this.setState({
            ...this.state,
            inputValue: e.target.value
        })
    }

    handleSubmit = e => {
        console.log(postComment(this.props.mainVideoId))
        e.preventDefault()
        axios.post(postComment(this.props.mainVideoId),
            {
                name: 'Brainstation Guy',
                comment: this.state.inputValue
            }
        )
        .then(() => {
            e.target.value = '';
            this.state.inputValue = '';
            axios.get(getVideo(this.props.mainVideoId))
                .then(res => {this.setState(
                    {
                        ...this.state,
                        comments: res.data.comments.reverse()
                    }
                )})
        })
        .catch(err => console.log(err))
    }

    render() {
        console.log('COMMENTS IS RE-RENDERING', this.props.mainVideoId)
        return (            
            <section className = 'comments'>

                <p className="comments__top-label">JOIN THE CONVERSATION</p> 
                <div className="comments__form-container">
                    <img src={'/assets/images/Mohan-muruge.jpg'} alt="Comment avatar" className="comments__avatar"></img>
                    <form action="" className="comments__form">

                        <textarea 
                            type        = "text" 
                            name        = "comment-input" 
                            className   = "comments__input" 
                            id          =  "comment-input" 
                            placeholder = "Type your comment"
                            onChange    = {this.handleChange}
                            value       = {this.state.inputValue}
                        />     

                        <button onClick = {this.handleSubmit} className="cta-btn" id="add-comment">COMMENT</button>
                    </form>
                </div>

                <CommentList comments = {this.state.comments}></CommentList>
            </section>
        )
    }
}

