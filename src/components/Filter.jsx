
import { FiSearch } from "react-icons/fi"
import { CgArrowsV } from "react-icons/cg"
import "./Items.css"

export default function Filter() {
    return (
        <div className="filter">
            <div className="search">
                <FiSearch size={20} style={{ color: "var(--text-primary)", marginRight: ".5rem" }} />
                <input className="NFT-input" placeholder="Search for NFT" />
            </div>
            <div className="price">
                <span className="price-span">Price: Low to High </span>
                <CgArrowsV size={20} style={{ marginLeft: "1rem" }} />
            </div>
        </div>
    )
}
