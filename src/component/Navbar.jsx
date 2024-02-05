import {useState} from "react";
import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    const [isActive,setIsActive] = useState(false);
    function showMenu(){
        setIsActive(!isActive);
    }
    return(
        <nav className="navbar">
            <button className="collapse-btn" onClick={showMenu}>
                <i className="fa fa-bars"></i>
            </button>
            <ul className={`menu-list ${isActive && "active"}`}>
                <li><Link to="/">home</Link></li>
                <li><Link to="/photos">photos</Link></li>
                <li><Link to="/posts">posts</Link></li>
                <li><Link to="/products">products</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;