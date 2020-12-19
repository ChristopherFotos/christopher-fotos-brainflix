import React, { Component } from 'react'
import VideoPage from './Pages/VideoPage'
import { Route, Switch } from "react-router-dom";
import Upload from './components/Upload/Upload'

export default class App extends Component {

  render() {
    return (
      <Switch>
        <Route path ='/' exact component = {VideoPage} />
        <Switch>
          <Route path ='/:id' component = {VideoPage} />
        </Switch>
        <Route path = '/upload' component = {Upload} />
      </Switch>
    )
  }
}