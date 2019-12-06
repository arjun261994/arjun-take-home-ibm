import React, { Component } from 'react'
import './Overview.css'
export default function Overview(props) {
    let { id } = props
    return (
        <div id={id} className="i-flex-container">
            <div className="i-flex-item1">
                <img className="i-flex-ov-img" src="images/stanger-things_raw.png" />
                <div className="i-flex-ov-quote">
                    <q>
                        {props.data.quote.text}
                    </q>
                    <div> - {props.data.quote.author}</div>
                </div>
            </div>
            <div className="i-flex-item2">
                <img className="i-flex-ov-img" src="images/STImg1.jpg" />
            </div>
        </div>
    )
}
