import "./Navbar.css"
import USA from "../Assets/USA.png"
import { BsSearch, BsSunFill } from "react-icons/bs"

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-left">
            <h1 className="brand">Cryptooes</h1>
            <div className="navlink">
                <ul className="nav-lists">
                    <li id="nft">NFT</li>
                    <li>Cryptocurrency</li>
                    <li>Metaverse</li>
                    <li>How it Works</li>
                    <li>Feeds</li>
                    <li>Advertise</li>
                    <li>ICO Calendar</li>
                    <li>Defi</li>
                    <li>Subscribe & Learn</li>
                </ul>
            </div>
        </div>
        <div className="nav-right">
            <BsSearch size={20} style={{color: "var(--text-primary)", marginRight: "2rem", cursor: "pointer"}}/>
            <div className="nav-left-mid">
                <div className="lang">
                    <p className="eng">ENG</p>
                    <img className="flag" src={USA} alt="US flag"/>
                </div>
                <p className="usd">USD</p>
                <BsSunFill size={20} style={{color: "var(--text-primary)", marginLeft: "1rem", cursor: "pointer"}}/>
            </div>
            <div className="autenticate">
                <p className="login">Login</p>
                <button>Sign Up</button>
            </div>
        </div>
    </div>
  )
}
