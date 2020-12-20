import React from 'react'
import posterImg from '../../assets/images/thumbnails/video-list-0.jpg'
import './VideoPlayer.scss'

export default function VideoPlayer(props) {
    console.log(props.duration)
    return ( 
        <section className="video-player">
            <video src="" poster={props.image} className="main-player">
            </video>
            <div className="controls center">
                <span className="controls__pause">
                    <img src="/assets/Icons/Icon-play.svg" alt=""/>
                    <img src="/assets/Icons/Icon-scrubber-controls.svg" alt=""/>
                </span>
                <span className="controls__scrubber">
                    <span className="controls__scrubber-bar">
                    <img src="/assets/Icons/Icon-scrubber-control.svg" className='controls__scrubber-icon' alt=""/>
                    </span>
                    {props.duration}
                </span>
                <span className="controls__volume-fullscreen">
                        <img src="/assets/Icons/Icon-fullscreen.svg" className='controls__fullscreen' alt=""/>
                        <img src="/assets/Icons/Icon-volume.svg" className='controls__volume' alt=""/>
                    </span>
            </div>
        </section>
    )
}