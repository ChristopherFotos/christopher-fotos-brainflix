import React, { Component } from 'react'
import VideoPage from './Pages/VideoPage'
import { Route, Switch } from "react-router-dom";
import Upload from './components/Upload/Upload'

export default class App extends Component {

  render() {
    return (
      <Switch>
        
        <Switch>
          <Route path ='/' exact component = {VideoPage} />
          <Route path = '/upload' component = {Upload} />
          <Route path ='/:id' component = {VideoPage} />
          
        </Switch>
      </Switch>
    )
  }
}