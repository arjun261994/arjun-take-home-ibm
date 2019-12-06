import React, { Component } from 'react'
const HOCDropDown = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                toggleDropDown: false
            }
        }
        handleToggle = () => {
            let { toggleDropDown } = this.state
            this.setState({ toggleDropDown: !toggleDropDown })
        }
        closeDropDown = () => {
            let { toggleDropDown } = this.state
            if (toggleDropDown) {
                this.setState({ toggleDropDown: false })
            }
            // toggleDropDown ? this.setState({ toggleDropDown: false }) : null;
        }
        render() {
            return (
                <WrappedComponent
                    handleToggle={this.handleToggle}
                    toggleDropDown={this.state.toggleDropDown}
                    closeDropDown={this.closeDropDown}
                    {...this.props}
                />
            )
        }
    }
}
export default HOCDropDown

// import React, { Component } from 'react';

// const withDropDown = WrappedComponent => {
//     return class extends Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 toggleDropDown: false
//             }
//         }
//         handleToggle = () => {
//             let { toggleDropDown } = this.state
//             this.setState({ toggleDropDown: !toggleDropDown })
//         }
//         closeDropDown = () => {
//             let { toggleDropDown } = this.state
//             toggleDropDown ? this.setState({ toggleDropDown: false }) : null
//         }
//         render() {
//             return (
//                 <WrappedComponent
//                     handleToggle={this.handleToggle}
//                     toggleDropDown={this.state.toggleDropDown}
//                     closeDropDown={this.closeDropDown}
//                     {...this.props}
//                 />
//             )
//         }
//     }
// }

// export default withDropDown;