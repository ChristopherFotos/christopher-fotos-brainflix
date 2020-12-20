import React from 'react'
import {Link} from 'react-router-dom'

// This component needs to be wrapped in a link to the /videos route with the id from props as a URL parameter.
// The click handler will have to be removed

export default function VideoThumb(props) {
    return (
        <Link to = {`/${props.video.id}`}>
            <div className="next-videos__item" >
                    <img src={props.video.image} alt="" class="next-videos__thumb"></img>
                    <div className="next-videos__meta">
                        <h4 className="next-videos__title">{props.video.title}</h4>
                        <p className="next-video__user">{props.video.channel}</p>
                    </div>
            </div>
        </Link>
    )
}
