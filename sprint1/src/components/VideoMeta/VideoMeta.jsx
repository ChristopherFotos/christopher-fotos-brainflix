import React from 'react'
import MetaInfo from './MetaInfo/MetaInfo'
import MetaStats from './MetaStats/MetaStats'
import './VideoMeta.scss'

export default function VideoMeta(props) {
    return (
        <section className='video-meta'>

            <h1 className='video-meta__title'>BMX Rampage: 2018 Highlights</h1>

            <MetaInfo></MetaInfo>
            <MetaStats
                likes = {props.likes}
                views = {props.views}
            ></MetaStats>

            <span className="divider"></span>
            <div className="video-description">
                <p className="video-description__text"> 
                    {props.description}
                </p>
            </div>
        </section>
    )
}