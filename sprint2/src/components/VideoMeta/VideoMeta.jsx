import React from 'react'
import './VideoMeta.scss'

export default function VideoMeta(props) {

    // Format timestamp into a date
    let stringDate = new Date(props.timestamp).toLocaleString().split(',').shift()

    return (
        <section className='video-meta'>
            <h1 className='video-meta__title'>
                {props.title}
            </h1>
            <div className="video-meta__wrapper">
            <div className ='flex'>
                <h3 className ="video-meta__uploader-name">{props.channel}</h3>
                <span className ="video-meta__date">{stringDate}</span>
            </div>
            <div className="flex video-meta__stats">
                <span className="video-meta__views"><img src={"/assets/Icons/icon-views.svg"} alt=""></img>{props.views}</span>
                <span className="video-meta__likes"><img src={"/assets/Icons/icon-likes.svg"} alt=""></img>{props.likes}</span>
            </div>
            </div>
            <span className="divider"></span>
            <div className="video-description">
                <p className="video-description__text"> 
                    {props.description}
                </p>
            </div>
        </section>
    )
}