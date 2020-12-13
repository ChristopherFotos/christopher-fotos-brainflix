import React, { Component } from 'react'
import VideoThumb from './VideoThumb/VideoThumb'
import './NextVideos.scss'

export default class NextVideos extends Component {


        state = {
            nextVideos: [
                {
                    id: 'type of <string>', 
                    title: 'Become A Travel Pro In One Easy Lesson', 
                    channel: 'Bernice Lambert', 
                    image: '/assets/images/thumbnails/video-list-3.jpg' 
                },
                {
                    id: 'type of <string>', 
                    title: 'Les Houches The Hidden Gem Of The Chamonix', 
                    channel: 'Bernard Patrick', 
                    image: '/assets/images/thumbnails/video-list-3.jpg' 
                },
                {
                    id: 'type of <string>', 
                    title: 'Travel Health Useful Medical Information For', 
                    channel: 'Glen Harper', 
                    image: '/assets/images/thumbnails/video-list-2.jpg' 
                },
                {
                    id: 'type of <string>', 
                    title: 'Cheap Airline Tickets Great Ways To Save', 
                    channel: 'Emily Harper', 
                    image: '/assets/images/thumbnails/video-list-1.jpg' 
                },
              ]
        }

    

    render() {
        return (
            <aside className = "next-videos">
                {
                    this.state.nextVideos.map(v => <VideoThumb video = {v} ></VideoThumb>)
                }
            </aside>
        )
    }
}

