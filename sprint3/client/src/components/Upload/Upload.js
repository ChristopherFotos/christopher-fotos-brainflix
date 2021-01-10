import Axios from 'axios'
import React, { Component } from 'react'
import Header from '../Header/Header'
import axios from 'axios'
import './Upload.scss'

export default class Upload extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }



    handleChange(e){
        e.target.name === 'title' ? 
            this.setState({...this.state,title: e.target.value}) :
            this.setState({...this.state,description: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:8080/videos',
                {
                    ...this.state,
                    image: 'https://i.imgur.com/C87vMI3.jpg'
                }
            )
            .then(this.setState({title: '', description: ''}))
            .catch(err => console.trace(err))
    }

    render() {
        return (
            <>
            <Header />
            <div className = 'upload'>
                <h1 className='upload__title'>Upload Video</h1>
    
                <div className = 'upload__inner-container'>
                    <div className = 'upload__top'>
                        <p className ='upload__subhead'>VIDEO THUMBNAIL</p>
                        <img src='./assets/images/thumbnails/video-list-3.jpg' className = 'upload__thumbnail' alt='video thumbnail'/>
                     </div>
       
                    <form className = 'upload__form'>
                        <label htmlFor = 'title' className ='upload__subhead'>TITLE YOUR VIDEO</label>
                        <input onChange={this.handleChange} value={this.state.title} type = 'text' name = 'title' className='upload__video-name' placeholder ='Add a title to your video'/> 
                        <label htmlFor = 'description' className ='upload__subhead'>TITLE YOUR VIDEO</label>
                        <textarea onChange={this.handleChange} value={this.state.description} name = 'description' className='upload__video-description' placeholder ='Add a description of your video'/> 
                    </form>
                </div>
                <div className='upload__buttons'>
                    <button onClick = {this.handleSubmit} className ='upload__button upload__publish'>Publish</button>
                    <button className='upload__button upload__cancel'>Cancel</button>
                </div>
            </div>
            </>
        )
    }
}

