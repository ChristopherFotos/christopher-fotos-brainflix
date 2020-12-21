import React from 'react'
import Header from '../Header/Header'
import './Upload.scss'

export default function Upload(props) {
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
                    <label for = 'name' className ='upload__subhead'>TITLE YOUR VIDEO</label>
                    <input type = 'text' name = 'name' className='upload__video-name' placeholder ='Add a title to your video'/> 
                    <label for = 'description' className ='upload__subhead'>TITLE YOUR VIDEO</label>
                    <textarea name = 'description' className='upload__video-description' placeholder ='Add a description of your video'/> 
                </form>
            </div>
            <div className='upload__buttons'>
                <button className ='upload__button upload__publish'>Publish</button>
                <button className='upload__button upload__cancel'>Cancel</button>
            </div>
        </div>
        </>
    )
}
