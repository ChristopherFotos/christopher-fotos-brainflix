import React from 'react'
import posterImg from '../../assets/images/thumbnails/video-list-0.jpg'
import './VideoPlayer.scss'

export default function VideoPlayer() {
    return (
        <section className="video-player">
            <video controls src="" poster={posterImg} className="main-player"></video>
        </section>
    )
}
