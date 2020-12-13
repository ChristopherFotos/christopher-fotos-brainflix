import React from 'react'
import VideoMeta from '../VideoMeta/VideoMeta'
import NextVideos from '../NextVideos/NextVideos'
import Comments from '../Comments/Comments'

import './container.scss'

export default function Container() {
    return (
        <section className = 'container'>
            <section className="video-meta-container">
                <VideoMeta></VideoMeta>
                <Comments></Comments>
            </section>
            <NextVideos></NextVideos>
        </section>
    )
}
