import { useEffect } from "react";
import "./orders.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Orders({orders,setOrders}) {
    let products = JSON.parse(localStorage.getItem("products"));
    let newProducts = [...products];
    let orderList = products.filter(p => p.count !== 0);
    let totalPrice = orders.reduce((total, current) => {
        return Math.round(total + (current.count * current.price));
    }, 0)
    
    useEffect(() => {
        setOrders(orderList);
    }, [])

    useEffect(()=>{
        localStorage.setItem("orders",JSON.stringify(orders))
    },[orders])

    return (
        <div className="order-list">
            {orders.length !== 0 ? (
                <>
                    <table className="vertical">
                        {orders.map((o, index) => {
                            return (
                                <>
                                    <tr>
                                        <th>image</th>
                                        <td><img src={o.image} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <th>title</th>
                                        <td>{o.title}</td>
                                    </tr>
                                    <tr>
                                        <th>count</th>
                                        <td><a>{!(o.count <= 1) ? <button onClick={() => handleChange(o.id, "d")}>-</button> : <button onClick={() => handleChange(o.id, "c")}><FontAwesomeIcon icon={faTrashCan} /></button>}</a>{o.count}<a><button onClick={() => handleChange(o.id, "i")}>+</button></a></td>
                                    </tr>
                                    <tr>
                                        <th>price</th>
                                        <td>{o.price}</td>
                                    </tr>
                                </>
                            )
                        })}

                    </table>
                    <table className="horizontal">
                        <thead>
                            <tr>
                                <th>image</th>
                                <th>title</th>
                                <th>count</th>
                                <th>price</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map((o, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img src={o.image} alt="" /></td>
                                        <td>{o.title}</td>
                                        <td><a>{!(o.count <= 1) ? <button onClick={() => handleChange(o.id, "d")}>-</button> : <button onClick={() => handleChange(o.id, "c")}><FontAwesomeIcon icon={faTrashCan} /></button>}</a>{o.count}<a><button onClick={() => handleChange(o.id, "i")}>+</button></a></td>
                                        <td>{o.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <h3 className="total-price">total price:<span>{totalPrice}</span></h3>
                </>
            ) : (
                <div className="not-exist">
                    <h2 style={{ textAlign: "center" }}>orders is not exist</h2>
                    <div><Link to="/products" className="link">go to products page</Link></div>
                </div>)}
        </div>
    )

    function handleChange(productId, flag) {
        const getProduct = newProducts.find(p => p.id === productId);
        const fitlerOrders = orders.filter(o => o.id !== productId);
        switch (flag) {
            case "i":
                getProduct.count++;
                setOrders(orderList)
                break;
            case "d":
                getProduct.count--;
                setOrders(orderList)
                break;
            case "c":
                getProduct.count = 0;
                setOrders(fitlerOrders);
                break;
        }
        localStorage.setItem("products", JSON.stringify(newProducts));
    }
}

export default Orders;