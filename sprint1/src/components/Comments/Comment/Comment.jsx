import React from 'react'

export default function Comment(props) {
    return (
        <div className="comments__content">
            <img className="comments__avatar" src="./assets/images/Mohan-muruge.jpg"></img>
            <div className="comments__inner-container"><div className="comments__text">
                <div className="comments__meta">
                    <span className="comments__name">Theodore Duncan</span>
                    <span className="comments__date">6/4/118 at 18:42</span>
                </div>
            </div>
            <div className="comments__text">
                <p className="comments__p">
                    How can someone be so good!!! You can tell he lives for this and 
                    loves to do it every day. Everytime I see him I feel instantly 
                    happy! He’s definitely my favorite ever!
                </p>
                    </div>
            </div>
        </div>
    )
}
