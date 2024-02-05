import "./orders.css"
import { useEffect } from "react";
import {useState} from "react";

function Orders() {
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        const orders = JSON.parse(localStorage.getItem("orders"));
        setOrders(orders);
    },[])
    return (
        <table>
            <thead>
                <tr>
                    <th>image</th>
                    <th>title</th>
                    <th>count</th>
                    <th>price</th>
                </tr>
            </thead>

            <tbody>
                {orders.map((o,index)=>{
                    return(
                        <tr key={index}>
                        <td><img src={o.image} alt=""/></td>
                        <td>{o.title}</td>
                        <td>{o.count}</td>
                        <td>{o.price}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Orders;