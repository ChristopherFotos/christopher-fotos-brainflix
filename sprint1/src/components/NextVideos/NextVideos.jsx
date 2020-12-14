import React, { Component } from 'react'
import data from '../../data'
import VideoThumb from './VideoThumb/VideoThumb'
import './NextVideos.scss'

export default class NextVideos extends Component {
    state = {
        nextVideos: data.map(v => {
            return {
                id: v.id,
                title: v.title,
                channel: v.channel,
                image: v.image
            }
        })
    }

    render() {
        return (
            <aside className = "next-videos">
                {
                    this.state.nextVideos
                        .filter(v => v.id !== this.props.mainVideoId)
                        .map(v => <VideoThumb video = {v} handleClick = {this.props.changeVideo}></VideoThumb>)
                }
            </aside>
        )
    }
}

