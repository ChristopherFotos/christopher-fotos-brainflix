import React, { Component } from 'react'
import data from './data'
import Header from './components/Header/Header'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import VideoMeta from './components/VideoMeta/VideoMeta'
import NextVideos from './components/NextVideos/NextVideos'
import Comments from './components/Comments/Comments'
// import Container from './components/Container/Container'

export default class App extends Component {

  state = {
    mainVideo: data[0]
  }

  changeMainVideo = (video) => {
    this.setState({...this.state, mainVideo: video})
  }

  render() {
    console.log(this.state.mainVideo)
    return (
      <>
          <Header></Header>
          <VideoPlayer
            image = {this.state.mainVideo.image}>
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
                comments = {this.state.mainVideo.comments}
              ></Comments>
          </section>
          <NextVideos 
            changeVideo = {this.changeMainVideo}
            mainVideoId = {this.state.mainVideo.id}
            ></NextVideos>
          </section>
      </>
    )
  }
}



