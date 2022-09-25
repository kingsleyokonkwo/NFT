import "./BoredApe.css"
import React from 'react'
import { BsStarFill } from "react-icons/bs"
import { FaTwitter, FaDiscord, FaDesktop } from "react-icons/fa"

export default function BoredApe() {
    return (
        <div className="BA-container">
            <h3 className="BA-h3">Bored Ape</h3>
            <span className="BA-rating">
                <h3 className="BA-rate">5.0</h3>
                <div className="star-icon">
                    <BsStarFill size={20} style={{color: "orange"}}/>
                    <BsStarFill size={20} style={{color: "orange"}}/>
                    <BsStarFill size={20} style={{color: "orange"}}/>
                    <BsStarFill size={20} style={{color: "orange"}}/>
                    <BsStarFill size={20} style={{color: "orange"}}/>
                </div>
                <a className="BA-link" href="">Add Rating</a>
            </span>
            <p className="BA-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At omnis cupiditate nihil ut doloremque nisi quos dolorem odio ipsa consequatur odit, unde officia facilis debitis praesentium, facere similique ab atque.</p>
            <span className="BA-socials">
                <FaDesktop className="BA-icon"/>
                <FaTwitter className="BA-icon"/>
                <FaDiscord className="BA-icon"/>
            </span>
            <div className="market">
                <div className="content">
                    <h5 className="amount">120 ETH</h5>
                    <p className="desc">Floor Price</p>
                </div>

                <div className="content">
                    <h5 className="amount">9.4K</h5>
                    <p className="desc">Owner</p>
                </div>

                <div className="content">
                    <h5 className="amount">120</h5>
                    <p className="desc">Volume Traded</p>
                </div>

                <div className="content">
                    <h5 className="amount">52</h5>
                    <p className="desc">Items</p>
                </div>
            </div>
        </div>
    )
}
