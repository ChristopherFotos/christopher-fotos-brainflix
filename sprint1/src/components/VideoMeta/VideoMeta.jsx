import React from 'react'
import MetaInfo from './MetaInfo/MetaInfo'
import MetaStats from './MetaStats/MetaStats'
import './VideoMeta.scss'

export default function VideoMeta(props) {
    return (
        <section className='video-meta'>
            {/* TODO: make title dynamic */}
            <h1 className='video-meta__title'>BMX Rampage: 2018 Highlights</h1>
            <MetaInfo></MetaInfo>
            <MetaStats></MetaStats>
            <span className="divider"></span>
            <div className="video-description">
                <p className="video-description__text"> 
                On a gusty day in Southern Utah, a group of 25
                daring mountain bikers blew the doors off what is
                possible on two wheels, unleashing some of the
                biggest moments the sport has ever seen. While
                mother nature only allowed for one full run before
                the conditions made it impossible to ride, that was
                all that was needed for event veteran Kyle Strait,
                who won the event for the second time -- eight years
                after his first Red Cow Rampage title
                </p>
            </div>
        </section>
    )
}