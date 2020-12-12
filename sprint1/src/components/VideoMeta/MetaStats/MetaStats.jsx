import React from 'react'
import './MetaStats.scss'


export default function MetaStats() {
    return (
        <div className="flex video-meta__stats">
            <span className="video-meta__views"><img src="./assets/Icons/SVG/icon-views.svg" alt=""></img>1,001,023</span>
            <span className="video-meta__likes"><img src="./assets/Icons/SVG/icon-likes.svg" alt=""></img>110,985</span>
        </div>
    )
}
