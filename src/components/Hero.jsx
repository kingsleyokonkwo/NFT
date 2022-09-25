import "./Hero.css"
import React from 'react'
import nft1 from "../Assets/nft6.png"
import nft2 from "../Assets/nft8.jpg"
import nft3 from "../Assets/nft15.jpg"
import nft4 from "../Assets/nft4.png"
import { BsStarFill } from "react-icons/bs"
import { HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi"



export default function Hero() {
  return (
    <div className=" hero">
        <div className="img-container">
            <span className="span">
                <img id="img1" className="hero-img" src={nft1} alt='nft'/>
                <img className="hero-img" src={nft2} alt='nft'/>
                <img id="img3" className="hero-img" src={nft3} alt='nft'/>
                <img className="hero-image" src={nft4} alt='nft'/>
            </span>
        </div>
        <div className="reaction">
            <div className="action">
                <HiOutlineThumbUp size={45} style={{color: "Var(--text-primary", backgroundColor: "var(--accent)", padding: ".5rem", borderRadius: "50%", marginBottom: ".5rem"}}/>
                <p>50</p>
            </div>
            <div className="action">
                <HiOutlineThumbDown size={45} style={{color: "Var(--text-primary", backgroundColor: "rgba(128, 128, 128, .4)", padding: ".5rem", borderRadius: "50%", marginBottom: ".5rem"}}/>
                <p>25</p>
            </div>
            <div className="action">
                <BsStarFill size={45} style={{color: "orange", backgroundColor: "rgba(128, 128, 128, .4)", padding: ".5rem", borderRadius: "50%", marginBottom: ".5rem"}}/>
                <p>123</p>
            </div>
        </div>
    </div>
  )
}
