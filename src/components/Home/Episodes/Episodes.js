import React, { Component } from 'react'
import EpisodeItem from './EpisodeItem'
import './Episodes.css'
import DropDown from '../../DropDown/DropDown'
// import DropDownRough from '../../DropDown/DropDownRough'

export default class Episodes extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props.episodeList)
    }

    render() {
        const { dropDownOptions, handleDropDownClick, selectedValue, id, handleFilterClick, selectedFilter } = this.props
        return (
            <div id={id} style={{ backgroundImage: "url('images/STImg8.jpg')" }} className="i-episodes-main-container">
                <div className="i-episodes-header-main">
                    <div className="i-episodes-title-season-section">
                        <div className="i-episodesName-title">
                            Episodes
                    </div>
                        <div className="i-seasons-section">
                            <div>Seasons: </div>
                            <div style={selectedFilter === "All" ? { color: "black", backgroundColor: "white" } : null} onClick={() => handleFilterClick("All")} className="cursorpointer">All</div>
                            <div style={selectedFilter === 1 ? { color: "black", backgroundColor: "white" } : null} onClick={() => handleFilterClick(1)} className="cursorpointer">1</div>
                            <div style={selectedFilter === 2 ? { color: "black", backgroundColor: "white" } : null} onClick={() => handleFilterClick(2)} className="cursorpointer">2</div>
                        </div>
                    </div>

                    <div className="i-episodes-header-sort">
                        <div style={{ paddingRight: "1vw" }}>Sort By:</div>
                        <DropDown key={1} bodyClass={"4vw"} dropDownOptions={dropDownOptions} handleDropDownClick={handleDropDownClick} selectedValue={selectedValue} />

                    </div>
                </div>
                {/* <div>
                    <DropDown key={1} dropDownOptions={dropDownOptions} handleDropDownClick={handleDropDownClick} selectedValue={selectedValue} />
                </div> */}
                <div className="i-episodeList-mainContainer">
                    {
                        this.props.episodeList.map((obj, index) => (
                            <EpisodeItem key={index} episodeInfo={obj} />
                        ))
                    }
                    {/* {
                    this.props.episodeList.map((obj, index) => (
                        <EpisodeItem episodeInfo={episodeList[index]} />
                    ))
                    } */}
                </div>
            </div>
        )
    }
}
