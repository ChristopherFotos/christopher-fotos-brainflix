import React, { Component } from 'react'
import VideoPage from './Pages/VideoPage'
import { Route, Switch } from "react-router-dom";
import Upload from './components/Upload/Upload'

export default class App extends Component {

  render() {
    return (     
        <Switch>
          <Route path ='/' exact render = {routerProps => <VideoPage {...routerProps} default={"1af0jruup5gu"}/> } />
          <Route path = '/upload' component = {Upload} />
          <Route path ='/:id' component = {VideoPage} />
        </Switch>  
    )
  }
}