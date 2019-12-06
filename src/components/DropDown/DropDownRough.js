import React, { Component } from 'react'

export default class DropDownRough extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleDropDown: false
        }
    }
    componentDidMount() {
        console.log("props from dropdown", this.props)
    }
    handleDropClick = (name, val) => {
        console.log("coming click")
        this.props.handleDropDownClick(name, val)
        // this.closeDropDown()
    }
    // closeDropDown = () => {
    //     let { toggleDropDown } = this.state;
    //     toggleDropDown ? this.setState({ toggleDropDown: false }) : (null)
    // }
    handleToggle = () => {
        console.log("toggle coming")
        let { toggleDropDown } = this.state
        this.setState({ toggleDropDown: !toggleDropDown })
    }
    render() {
        return (
            <div ref={dropDownRef => this.dropDownRef = dropDownRef} >
                <div onClick={() => this.handleToggle()} >{this.props.selectedValue}</div>
                {
                    this.state.toggleDropDown ?
                        (
                            <div>
                                {this.props.dropDownOptions.map((obj, index) => (
                                    <div key={index} onClick={() => this.handleDropClick(obj.name, obj.val)}>{obj.val}</div>
                                ))}
                            </div>
                        ) : null
                }

            </div>
        )
    }
}
