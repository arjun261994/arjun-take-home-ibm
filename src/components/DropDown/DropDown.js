import React, { Component } from 'react'
import HOCDropDown from '../HigherOrderComponent/HOCDropDown'
import './DropDown.css'
class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleDropDown: false
        }
    }
    componentDidMount() {
        console.log(this.props, "comingggg")
        document.addEventListener('mousedown', this.handleClick, false)
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }
    handleClick = (e) => {
        if (this.dropDownRef) {
            if (this.dropDownRef.contains(e.target)) {
                return;
            }
        }
        this.props.closeDropDown()
    }
    handleDropClick = (name, val) => {
        this.props.handleDropDownClick(name, val)
        this.props.closeDropDown()
    }
    // handleToggle = () => {
    //     let { toggleDropDown } = this.state
    //     this.setState({ toggleDropDown: !toggleDropDown })
    // }
    // closeDropDown = () => {
    //     let { toggleDropDown } = this.state
    //     if (toggleDropDown) {
    //         this.setState({ toggleDropDown: false })
    //     }
    // toggleDropDown ? (this.setState({ toggleDropDown: false })) : null;
    // }
    render() {
        let { bodyClass, toggleDropDown } = this.props
        console.log(this.props)
        return (
            <div className="i-dropdown-container" ref={dropDownRef => this.dropDownRef = dropDownRef}>
                <div className="i-dropdown-header cursorpointer" onClick={() => this.props.handleToggle()}>
                    <div>{this.props.selectedValue}</div>
                    <span><img className="i-dropDown-arrow" src="images/grayArrowDown.svg" /></span>
                </div>
                {
                    toggleDropDown ?
                        (
                            <div style={{ width: bodyClass }} className="i-dropdown-body">
                                {this.props.dropDownOptions.map((obj, index) => (
                                    <div className="i-dropDown-item cursorpointer" key={index} onClick={() => this.handleDropClick(obj.name, obj.val)}>{obj.val}</div>
                                ))}
                            </div>
                        ) : null
                }

            </div>
        )
    }
}
export default HOCDropDown(DropDown)
