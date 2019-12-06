import React from 'react'
import DropDown from './DropDown/DropDown'
import './Header.css'
export default function Header(props) {
    let { dropDownOptions, handleDropDownClick, selectedValue, id } = props
    return (
        <div id={id} className="i-header-main-div">
            <h2>IBM TV</h2>
            <DropDown bodyClass={"9vw"} key={1} dropDownOptions={dropDownOptions} handleDropDownClick={handleDropDownClick} selectedValue={selectedValue} />

        </div>
    )
}
