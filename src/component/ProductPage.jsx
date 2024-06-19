import { useParams } from "react-router-dom";
import "./singleproduct.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoins,faFlag,faStar,faTrashCan} from "@fortawesome/free-solid-svg-icons";


function ProductPage() {
    let { id } = useParams();
    let getAllProducts = JSON.parse(localStorage.getItem("products"));
    let singleProduct = getAllProducts.find(p => p.id == id);

    return (
        <div className="product-details">
            <div className="product-card">
                <div className="product-image">
                    <img src={singleProduct.image} alt=""/>
                </div>
                <div className="product-info">
                    <h2>{singleProduct.title}</h2>
                    <h3>{singleProduct.category}</h3>
                    <ul className="details">
                        <li><span><FontAwesomeIcon icon={faCoins}/></span>{singleProduct.price}</li>
                        <li><span><FontAwesomeIcon icon={faFlag}/></span>{singleProduct.rating.count}</li>
                        <li><span><FontAwesomeIcon icon={faStar}/></span>{singleProduct.rating.rate}</li>
                    </ul>
                    <p>{singleProduct.description}</p>
                    <div className="add-card">
                        <a>{!(singleProduct.count <= 1) ? <button >-</button> : <button ><FontAwesomeIcon icon={faTrashCan} /></button>}</a>{singleProduct.count}<a><button>+</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductPage;