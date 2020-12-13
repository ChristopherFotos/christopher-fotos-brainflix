import React from 'react'
import posterImg from '../../assets/images/thumbnails/video-list-0.jpg'
import './VideoPlayer.scss'

export default function VideoPlayer(props) {
    console.log(require('../../assets/images/thumbnails/video-list-0.jpg'))
    return ( 
        // TODO: move images to public folder
        <section className="video-player">
            <video controls src="" poster={props.image} className="main-player"></video>
        </section>
    )
}