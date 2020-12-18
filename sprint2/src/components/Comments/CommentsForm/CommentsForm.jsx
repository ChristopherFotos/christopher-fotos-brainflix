import React from 'react'

export default function CommentsForm() {
    return ( 
            <div className="comments__form-container">
            <img src={'/assets/images/Mohan-muruge.jpg'} alt="Comment avatar" className="comments__avatar"></img>
            <form action="" className="comments__form">
                <textarea type="text" name="comment-input" className="comments__input" id="comment-input" placeholder="Type your comment"></textarea>
                <button type="submit" className="cta-btn" id="add-comment">COMMENT</button>
            </form>
        </div>
    )
}
