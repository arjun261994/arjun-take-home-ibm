import React from 'react'
import './Episodes.css'
export default function EpisodeItem(props) {
    const { name, season, rating } = props.episodeInfo
    return (
        <div className="i-EpisodeItem-Container">
            <div className="i-EpisodeItem-innerItem-1">
                <div>{name}</div>
                <div className="i-EpisodeItem-innerItem-season">Season: {season}</div>
            </div>
            <div className="i-EpisodeItem-innerItem-2">
                <div className="i-EpisodeItem-innerItem-2-padding">IMDB Rating</div>
                <div>{rating}</div>
            </div>
        </div>
    )
}
