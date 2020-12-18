import React from 'react'
import './MetaStats.scss'

export default function MetaStats(props) {
    return (
        <div className="flex video-meta__stats">
            <span className="video-meta__views"><img src={"/assets/Icons/icon-views.svg"} alt=""></img>{props.views}</span>
            <span className="video-meta__likes"><img src={"/assets/Icons/icon-likes.svg"} alt=""></img>{props.likes}</span>
        </div>
    )
}