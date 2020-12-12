import React from 'react'
import './MetaInfo.scss'

export default function MetaInfo(props) {
    return (
        <div className='flex'>
            {/* TODO: make these dynamic */}
            <h3 className="video-meta__uploader-name">By Red Cow</h3>
            <span className="video-meta__date">12/18/2018</span>
        </div>
    )
}
