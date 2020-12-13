import React from 'react'
import data from '../../../data'

export default function VideoThumb(props) {

    return (
        <div className="next-videos__item" onClick = {() => props.handleClick(data.filter( v => v.id === props.video.id)[0])}> 
            <img src={props.video.image} alt="" class="next-videos__thumb"></img>
            <div className="next-videos__meta">
                <h4 className="next-videos__title">{props.video.title}</h4>
                <p className="next-video__user">{props.video.channel}</p>
            </div>
        </div>
    )
}
