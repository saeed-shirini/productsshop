import {useState} from "react";
import "./navbar.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

function Navbar(){
    const [isActive,setIsActive] = useState(false);
    function showMenu(){
        setIsActive(!isActive);
    }
    let products = localStorage.getItem(JSON.stringify("products"));
    console.log(products)
    return(
        <nav className="navbar">
            <button className="collapse-btn" onClick={showMenu}>
                <i className="fa fa-bars"></i>
            </button>
            <ul className={`menu-list ${isActive && "active"}`}>
                <div className="left">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/photos">photos</Link></li>
                    <li><Link to="/posts">posts</Link></li>
                    <li><Link to="/products">products</Link></li>
                </div>
                <div className="right">
                    <li><Link to="/orders"><FontAwesomeIcon icon={faCartShopping}/></Link><span className="order-count"></span></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;