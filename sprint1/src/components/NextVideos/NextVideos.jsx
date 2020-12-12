import React from 'react'
import VideoThumb from './VideoThumb/VideoThumb'
import './NextVideos.scss'



export default function NextVideos() {
    return (
        <aside className = "next-videos">
            {/* These will be rendered dynamically */}
            <VideoThumb></VideoThumb>
            <VideoThumb></VideoThumb>
            <VideoThumb></VideoThumb>
        </aside>
    )
}
