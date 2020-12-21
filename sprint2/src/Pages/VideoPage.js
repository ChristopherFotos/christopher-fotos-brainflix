import React, { Component } from 'react'
import axios from 'axios';
import Header from '../components/Header/Header'
import nullVideo from '../defaultVideo'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import VideoMeta from '../components/VideoMeta/VideoMeta'
import NextVideos from '../components/NextVideos/NextVideos'
import Comments from '../components/Comments/Comments'
import ENV from '../env'
const { getVideo } = ENV


export default class VideoPage extends Component {

    constructor(props){
        super()
        this.state = {
            id: props.match.params.id,
            mainVideo: nullVideo
        };
    }

    componentDidMount(){
        this.fetchVideo()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.fetchVideo()
          }
          
    }

    fetchVideo() {
        axios.get(getVideo(this.props.match.params.id || this.state.mainVideo.id))
              .then(res => {
                  this.setState({
                      mainVideo: res.data
                  })
              })
              .catch(err => console.log(err))
      }

    render() {
        return (
            <>
                <Header></Header>
                <VideoPlayer
                    duration = {this.state.mainVideo.duration}
                    image    = {this.state.mainVideo.image}
                >
                </VideoPlayer>
                <section className = 'container'>
                <section className="video-meta-container">
                    <VideoMeta 
                        title       = {this.state.mainVideo.title}
                        likes       = {this.state.mainVideo.likes}
                        views       = {this.state.mainVideo.views}
                        channel     = {this.state.mainVideo.channel}
                        description = {this.state.mainVideo.description}
                        timestamp   = {this.state.mainVideo.timestamp}
                    ></VideoMeta>
                    <Comments
                        comments    = {this.state.mainVideo.comments}
                        mainVideoId = {this.state.mainVideo.id}
                    ></Comments>
                </section>
                <NextVideos 
                    mainVideoId = {this.state.mainVideo.id}
                ></NextVideos>
                </section>
            </>
        )
    }
}


