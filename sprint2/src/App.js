import React, { Component } from 'react'
import ENV from './env'
import defaultVideo from './defaultVideo'
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Header from './components/Header/Header'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import VideoMeta from './components/VideoMeta/VideoMeta'
import NextVideos from './components/NextVideos/NextVideos'
import Upload from './components/Upload/Upload'
import Comments from './components/Comments/Comments'
const { getVideo } = ENV

export default class App extends Component {

  // Main video will no longer need to be held in state. We're going to get the main video
  // using a URL parameter. 

  state = {
      mainVideo: defaultVideo
  }

  componentDidMount(){
    axios.get(getVideo('1af0jruup5gu'))
      .then(res => {
        this.setState({
          mainVideo: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  changeMainVideo = (id) => { 
    axios.get(getVideo(id))
      .then(res => {
        this.setState({
          mainVideo: res.data
        })
      })
  }

  render() {
    console.log(getVideo('1af0jruup5gu'))
    console.log(this.state.mainVideo)
    return (
      <>

      {/* parameter will be used here */}
        <Route path ='/'exact>
        
            <Header></Header>
            <VideoPlayer
              image = {this.state.mainVideo.image}
            >
            </VideoPlayer>
            <section className = 'container'>
            <section className="video-meta-container">
                <VideoMeta 
                  title       = {this.state.mainVideo.title}
                  likes       = {this.state.mainVideo.likes}
                  views       = {this.state.mainVideo.views}
                  description = {this.state.mainVideo.description}
                ></VideoMeta>
                <Comments
                  comments    = {this.state.mainVideo.comments}
                ></Comments>
            </section>
            <NextVideos 
              changeVideo = {this.changeMainVideo}
              mainVideoId = {this.state.mainVideo.id}
              ></NextVideos>
            </section>
        </Route>

        <Route path = '/upload' component={Upload} />

      </>
    )
  }
}