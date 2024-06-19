import {useState} from "react";
import {Link} from "react-router-dom";
const descriptionLength = 100;


function Product({product,id,onIncrement,onDecrement}){
    const [isActive,setIsActive] = useState(false);
    let sliceDescription = product.description.slice(0,descriptionLength);
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return(
            <div className="product">
                <div className="product-image">
                    <Link to={"/products/"+id}><img src={product.image} alt=""/></Link>
                </div>
                <h2 className="product-title">
                    <Link to={"/products/"+id}>{product.title}</Link>
                </h2>
                <p className="product-description">
                    {product.description.length >= descriptionLength && !isActive ? sliceDescription : product.description}
                </p>
                {product.description.length >= descriptionLength && <button className="continue-btn none-border-outline" onClick={handleClick}>{!isActive ? "continue" : "less"}</button>}
                
                <div className="product-details">
                    <div className="product-price">
                            <h3>price <p>{product.price}</p></h3>
                    </div>
                    <div className="product-rate">
                        <h3>rate <p>{product.rating.rate}</p></h3>
                        <h3>count <p>{product.rating.count}</p></h3>
                    </div>
                </div>

                <div className="add-to-shopping-cart">
                    <button onClick={()=>onDecrement(id)}>-</button>
                    <span>{product.count}</span>
                    <button onClick={()=>onIncrement(id)}>+</button>
                    {/*total Price:{product.count === 0 ? 0 : product.price}*/}
                </div>
            </div>
    )
}
export default Product