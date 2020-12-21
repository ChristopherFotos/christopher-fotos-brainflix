import React, { Component } from 'react'
import axios from 'axios'
import ENV  from '../../env'
import VideoThumb from './VideoThumb/VideoThumb'
import './NextVideos.scss'

const { videoList } = ENV

export default class NextVideos extends Component {
    state = {
        nextVideos: []
    }

    componentDidMount(){

        axios.get(videoList)
            .then((res) => this.setState(
                {
                    ...this.state,
                    nextVideos: res.data
                }
            ))  
            .catch(err => {
                console.log(err);
                this.setState(
                    {
                        nextVideos: [{
                            title: 'Oops...Something went wrong.',
                            channel: "We're working to get this fixed as soon as we can.",
                            image: '/assets/images/404.png'}
                        ]
                    }
                )
            })    
    }

    render() {
        return (
            <aside className = "next-videos">
                {
                    this.state.nextVideos
                        .filter(v => v.id !== this.props.mainVideoId)
                        .map(v => <VideoThumb key = {v.id} video = {v} handleClick = {this.props.changeVideo}></VideoThumb>)
                }
            </aside>
        )
    }
}

