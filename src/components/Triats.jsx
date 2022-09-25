import "./Triats.css"
import { FaAngleDown } from "react-icons/fa"
import { useState } from "react"

export default function Triats() {
    const [open, setOpen] = useState(false)
    return (
        <div className="Triat-container">
            <h3 className="triat">Triats</h3>
            <div className={`menu-trigger ${open ? "active" : ""}`} onClick={()=>{setOpen(!open)}}>
                <p className="background">Background</p>
                <FaAngleDown size={25} style={{ color: "#fff" }} />
            </div>
            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                <DropdownItem color={"green"} id={"box1"} />
                <DropdownItem color={"Red"} id={"box2"}/>
                <DropdownItem color={"Yellow"} id={"box3"}/>
                <DropdownItem color={"Purple"} id={"box4"}/>
                <DropdownItem color={"Blue"} id={"box5"}/>
            </div>
            <br/>
            <div className="menu-trigger">
                <p className="background">Mouth</p>
                <FaAngleDown size={25} style={{ color: "#fff" }} />
            </div>
            <br/>
            <div className="menu-trigger">
                <p className="background">Fur</p>
                <FaAngleDown size={25} style={{ color: "#fff" }} />
            </div>
            <br/>
            <div className="menu-trigger">
                <p className="background">Mouth</p>
                <FaAngleDown size={25} style={{ color: "#fff" }} />
            </div>
            <br/>
            <div className="menu-trigger">
                <p className="background">Eyes</p>
                <FaAngleDown size={25} style={{ color: "#fff" }} />
            </div>
            <br/>
            <div className="menu-trigger">
                <p className="background">Triat Count</p>
                <FaAngleDown size={25} style={{ color: "#fff" }} />
            </div>
            <br/>
            <div className="menu-trigger">
                <p className="background">Cloth</p>
                <FaAngleDown size={25} style={{ color: "#fff" }} />
            </div>

        </div>
    )
}

function DropdownItem(props) {
    return (
        <div className="dropdown-item">
            <div className="checkbox-container">
                <input type="checkbox" id={props.id} />
                <label htmlFor={props.id}>{props.color}</label>
            </div>
            <br />
        </div>
    )
}