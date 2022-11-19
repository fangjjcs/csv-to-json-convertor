

import React from 'react'
import DropZone from './widgets/DropZone'

import './MainContent.css';
import JsonViewer from './widgets/JsonViewer';
import Image from '../../../shared/style/image/coding.png';

const MainContent = () => {

    return (
        <div className='content-box'>
            <DropZone />
            <JsonViewer />
            <img className="image" src={Image}></img>
        </div>
    )
}

export default MainContent
