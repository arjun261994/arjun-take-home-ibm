import React, { Component } from 'react'
import GalleryItemView from './GalleryItemView'
import './Gallery.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    render() {
        let { gallery } = this.props.data
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500
        };
        return (
            <div id={this.props.id} style={{ backgroundImage: "url('images/STImg7.jpg')" }} className="i-gallery-main-container">
                <Slider {...settings}>
                    {
                        gallery.map((obj, index) => (
                            <GalleryItemView key={index} galleryInfo={obj} />
                        ))
                    }
                </Slider>
                <span>-- Slide to view more photos from Stranger Things --</span>
            </div>
        )
    }
}
