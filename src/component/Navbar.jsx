import {useState} from "react";
import "./navbar.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping,faBars} from "@fortawesome/free-solid-svg-icons";

function Navbar({orderscount}){
    const [isActive,setIsActive] = useState(false);
    function showMenu(){
        setIsActive(!isActive);
    }

    return(
        <nav className="navbar">
            <button className="collapse-btn" onClick={showMenu}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <ul className={`menu-list ${isActive && "active"}`}>
                <div className="left">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/photos">photos</Link></li>
                    <li><Link to="/posts">posts</Link></li>
                    <li><Link to="/products">products</Link></li>
                </div>
                <div className="right">
                    <li><Link to="/orders"><span className="order-count">{orderscount}</span><FontAwesomeIcon icon={faCartShopping}/></Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;