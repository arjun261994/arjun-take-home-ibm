import React, { Component } from 'react'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import Home from './components/Home/Home'
import axios from 'axios'
class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            engData: {},
            latData: {},
            englishDataFlag: true,
            episodeListArr: [],
            initialEpisodeArr: [],
            selectedFilter: "All",
            loader: false,
            sortType: [
                {
                    "name": "sort",
                    "val": "Asc"
                },
                {
                    "name": "sort",
                    "val": "Desc"
                }
            ],
            languageType: [
                {
                    "name": "lang",
                    "val": "English"
                },
                {
                    "name": "lang",
                    "val": "Latin"
                }
            ],
            selectedSort: "Desc",
            selectedLang: "English"
        }
    }
    componentDidMount() {
        this.getEngData()
        this.getLatinData()
    }
    getEngData = () => {
        axios.get('/data/en_US.json')
            .then((response) => {
                let data = response.data
                let episodeListArr = data["episode-list"]
                this.setState({ data, engData: data, episodeListArr, loader: true, initialEpisodeArr: episodeListArr })
            })
    }
    getLatinData = () => {
        axios.get('/data/la_PG.json')
            .then((response) => {
                let data = response.data
                this.setState({ latData: data })
            })
    }
    compareSortAscNumbers = (a, b) => {
        const ratingA = a.rating
        const ratingB = b.rating
        let result = 0
        if (ratingA > ratingB) {
            result = 1
        } else if (ratingA < ratingB) {
            result = -1
        }
        return result
    }
    compareSortDescNumbers = (a, b) => {
        const ratingA = a.rating
        const ratingB = b.rating
        let result = 0
        if (ratingA < ratingB) {
            result = 1
        } else if (ratingA > ratingB) {
            result = -1
        }
        return result
    }
    handleSortAsc = () => {
        let { episodeListArr } = this.state
        console.log(episodeListArr)
        episodeListArr.sort(this.compareSortAscNumbers)
        this.setState({ episodeListArr })
        console.log("sort", episodeListArr)
    }
    handleSortDesc = () => {
        let { episodeListArr } = this.state
        episodeListArr.sort(this.compareSortDescNumbers)
        this.setState({ episodeListArr })
        console.log("sort", episodeListArr)
    }
    handleEnglishData = () => {
        let { engData, englishDataFlag } = this.state
        let episodeListArr = engData["episode-list"]
        if (!englishDataFlag) {
            this.setState({ data: engData, episodeListArr, englishDataFlag: !englishDataFlag, selectedSort: "Desc" })
        }
    }
    handleLatinData = () => {
        let { latData, englishDataFlag } = this.state
        let episodeListArr = latData["episode-list"]
        if (englishDataFlag) {
            this.setState({ data: latData, episodeListArr, initialEpisodeArr: episodeListArr, englishDataFlag: !englishDataFlag, selectedSort: "Desc" })
        }
    }
    handleFilterClick = (filterValue) => {
        let { episodeListArr, initialEpisodeArr, selectedSort, selectedFilter } = this.state
        let filteredEpisodeListArr
        if (filterValue === "All") {
            selectedSort === "Asc" ?
                (this.setState({ episodeListArr: initialEpisodeArr, selectedFilter: filterValue }, () => this.handleSortAsc())) :
                (this.setState({ episodeListArr: initialEpisodeArr, selectedFilter: filterValue }, () => this.handleSortDesc()))
        } else {
            console.log("else came here", filterValue)
            filteredEpisodeListArr = initialEpisodeArr.filter((obj) => (
                obj.season === filterValue
            ))
            selectedSort === "Asc" ?
                (this.setState({ episodeListArr: filteredEpisodeListArr, selectedFilter: filterValue }, () => this.handleSortAsc())) :
                (this.setState({ episodeListArr: filteredEpisodeListArr, selectedFilter: filterValue }, () => this.handleSortDesc()))
        }
        // if (selectedSort === "Asc") { this.handleSortAsc() }
        console.log("filtered", filteredEpisodeListArr, episodeListArr)
    }
    handleDropDownClick = (name, val) => {
        let { selectedSort, selectedLang } = this.state
        console.log("name", name, "value ", val)
        if (name === "sort") {
            val === "Asc" ? this.handleSortAsc() : this.handleSortDesc()
        }
        else if (name === "lang" && val === "English") {
            console.log("English Clicked")
            this.handleEnglishData()
        } else if (name === "lang" && val === "Latin") {
            console.log("Latin Clicked")
            this.handleLatinData()
        }
        name === "sort" ? this.setState({ selectedSort: val }) : this.setState({ selectedLang: val })
    }
    render() {
        let { data } = this.state
        return (
            <React.Fragment>
                {
                    this.state.loader ?
                        <React.Fragment>
                            <Header
                                id="home"
                                data={this.state.data}
                                handleDropDownClick={this.handleDropDownClick}
                                dropDownOptions={this.state.languageType}
                                selectedValue={this.state.selectedLang}
                            />
                            <SubHeader />
                            <Home

                                data={this.state.data}
                                episodeListArr={this.state.episodeListArr}
                                handleDropDownClick={this.handleDropDownClick}
                                dropDownOptions={this.state.sortType}
                                selectedValue={this.state.selectedSort}
                                handleFilterClick={this.handleFilterClick}
                                selectedFilter={this.state.selectedFilter}
                            />
                        </React.Fragment>
                        : null
                }
            </React.Fragment>
        )
    }
}
export default MainHome