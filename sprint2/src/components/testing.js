import React from 'react'
import Header from '../components/Header/Header'
import defaultVideo from '../defaultVideo'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import VideoMeta from './VideoMeta/VideoMeta'
import NextVideos from './NextVideos/NextVideos'
import Comments from './Comments/Comments'
import ENV from '../env'

export default function Testing(props) {
    return (
        <>
        <Header></Header>
        <VideoPlayer
            image = {props.mainVideo.image}
        >
        </VideoPlayer>
        <section className = 'container'>
        <section className="video-meta-container">
            <VideoMeta 
                title       = {props.mainVideo.title}
                likes       = {props.mainVideo.likes}
                views       = {props.mainVideo.views}
                description = {props.mainVideo.description}
            ></VideoMeta>
            <Comments
                comments    = {props.mainVideo.comments}
            ></Comments>
        </section>
        <NextVideos 
            mainVideoId = {props.mainVideo.id}
        ></NextVideos>
        </section>
        </>
    )
}
