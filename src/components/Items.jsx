import "./Items.css"
import { BsBox } from "react-icons/bs"
import { HiOutlineMap } from "react-icons/hi"
import Triats from "./Triats"
import NftContainer from "./NftContainer"
import Filter from "./Filter"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

export default function Items() {
    return (
        <div className="items">
            <div className="item-title">
                <div className="nft-item box">
                    <BsBox size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <h3>NFT Items</h3>
                </div>

                <div className="nft-item map">
                    <HiOutlineMap size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    <h3>Roadmap</h3>
                </div>
            </div>
            <div className="item-container">
                <div className="triats">
                    <Triats />
                </div>
                <div className="nft-container">
                    <Filter/>
                    <NftContainer/>
                </div>
            </div>
            <div className="page-no">
                <span className="number">
                    <FaAngleLeft className="angle"/>
                    <div className="numbers"><p id="one">1</p> <p>2</p><p>3</p><p>4</p><p>5</p><p>6</p>... <p>24</p></div>
                    <FaAngleRight className="angle"/> 
                </span>
            </div>
        </div>
    )
}
