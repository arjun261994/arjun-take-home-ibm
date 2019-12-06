import React from 'react'
import './Gallery.css'
export default function GalleryItemView(props) {
    return (
        <div className="i-item-div">
            <img src={props.galleryInfo.src} className="image-4" />
            <p style={{ fontFamily: "monospace", fontSize: "1.2vw" }}>{props.galleryInfo.text}</p>
        </div>
    )
}
