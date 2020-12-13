import React, { Component } from 'react'
import Header from './components/Header/Header'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import VideoMeta from './components/VideoMeta/VideoMeta'
import NextVideos from './components/NextVideos/NextVideos'
import Comments from './components/Comments/Comments'
// import Container from './components/Container/Container'

export default class App extends Component {

  state = {
    mainVideo: {
      id: '123456',
      title: 'BMX Rampage: 2018 Highlights',
      description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
      channel: 'Red Cow',
      image: '/assets/images/thumbnails/video-list-0.jpg',
      views: '1,001,023',
      likes: '110,985',
      duration: '432543',
      video: 'null',
      timestamp: 1,
      comments: [{
        name: 'Theodore Duncan',
        comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!',
      }] 
    },

    

    
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
                likes       = {this.state.mainVideo.likes}
                views       = {this.state.mainVideo.views}
                description = {this.state.mainVideo.description}
              ></VideoMeta>
              <Comments
                comments = {this.state.mainVideo.comments}
              ></Comments>
          </section>
          <NextVideos></NextVideos>
          </section>
      </>
    )
  }
}



