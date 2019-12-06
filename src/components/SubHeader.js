import React from 'react'
import './SubHeader.css'
import { useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
export default function SubHeader() {
    useEffect(() => {
        const subHeader = document.getElementById("sub-Header")
        const subSticky = subHeader.offsetTop
        const callScroll = window.addEventListener("scroll", () => {
            if (window.pageYOffset > subSticky) {
                subHeader.classList.add("fixed-sub-header")
            } else {
                subHeader.classList.remove("fixed-sub-header")
            }
        })
        return () => {
            window.removeEventListener("scroll", callScroll)
        }
    }, [])
    return (
        <div id="sub-Header" className="i-subHeader-main-div">
            <div className="i-subHeader-container-div">
                <div className="i-subHeader-container-content cursorpointer">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Home
                    </Link>
                </div>
                <div className="i-subHeader-container-content cursorpointer">
                    <Link
                        activeClass="active"
                        to="inspiration"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Inspiration
                    </Link>
                </div>
                <div className="i-subHeader-container-content cursorpointer">
                    <Link
                        activeClass="active"
                        to="gallery"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Gallery
                    </Link>
                </div>
                <div style={{ padding: "0 1vw" }} className="cursorpointer">
                    <Link
                        activeClass="active"
                        to="episodes"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Episodes
                    </Link>
                </div>
            </div>
        </div>
    )
}
