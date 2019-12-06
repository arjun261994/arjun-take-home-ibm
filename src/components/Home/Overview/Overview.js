import React, { Component } from 'react'
import './Overview.css'
export default function Overview(props) {
    console.log("data is coming", props, props.data.quote.text)
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
                {/* <div>Hii</div> */}
            </div>
        </div>
    )
}

// class Overview extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//         }
//     }

//     render() {
//         return (
//             <div className="i-grid-container">
//                 <div className="i-grid-item1">
//                     <img src="images/stanger-things_raw.png" />
//                     <div>
//                         <span>
//                             {this.props.quote.text}
//                         </span>
//                     </div>
//                 </div>
//                 <div className="i-grid-item2">
//                     <img src="images/stanger-things_raw.png" />
//                     <div>Hii</div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Overview