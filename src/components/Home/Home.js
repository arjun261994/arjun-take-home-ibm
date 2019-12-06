import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'
import Overview from './Overview/Overview'
import Gallery from './Gallery/Gallery'
import Episodes from './Episodes/Episodes'
class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        let { data, id } = this.props
        return (
            <div>
                <div
                    style={{
                        position: "relative",
                        paddingBottom: "56.25%",
                        paddingTop: 25,
                        height: 0
                    }}
                >
                    <iframe
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }}
                        src={`https://www.newsobserver.com/news/local/article182498126.html/video-embed`}
                        frameBorder="0"
                        allow="autoplay fullscreen"
                    />
                    <div className="i-Home-Title-description">
                        <div style={{ fontSize: "5vw" }}>
                            {data.heading}
                        </div>
                        <div style={{ fontSize: "1vw" }}>
                            {data.description}
                        </div>
                    </div>
                </div>

                <React.Fragment>
                    <Overview id="overview" data={this.props.data} />
                    <Gallery id="gallery" data={this.props.data} />
                    <Episodes
                        id="episodes"
                        episodeList={this.props.episodeListArr}
                        handleDropDownClick={this.props.handleDropDownClick}
                        dropDownOptions={this.props.dropDownOptions}
                        selectedValue={this.props.selectedValue}
                        handleFilterClick={this.props.handleFilterClick}
                        selectedFilter={this.props.selectedFilter}
                    />
                </React.Fragment>

            </div>
        )
    }
}
export default Home
