
import React from 'react'

export default function VideoThumb(props) {
    console.log('hello')
    return (
        <div className="next-videos__item">
            <img src={props.video.image} alt="" class="next-videos__thumb"></img>
            <div className="next-videos__meta">
                <h4 className="next-videos__title">{props.video.title}</h4>
                <p className="next-video__user">{props.video.channel}</p>
            </div>
        </div>
    )
}
