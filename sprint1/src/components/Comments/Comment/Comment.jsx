import React from 'react'

export default function Comment(props) {
    return (
        <div className="comments__content">
            <img className="comments__avatar" src="./assets/images/Mohan-muruge.jpg"></img>
            <div className="comments__inner-container"><div className="comments__text">
                <div className="comments__meta">
                    <span className="comments__name">{props.comment.name}</span>
                    <span className="comments__date">6/4/118 at 18:42</span>
                </div>
            </div>
            <div className="comments__text">
                <p className="comments__p">
                    {props.comment.comment}
                </p>
                    </div>
            </div>
        </div>
    )
}
