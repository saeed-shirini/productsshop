import Navbar from "./component/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Photos from "./component/Photos";
import Products from "./component/products";
import Orders from "./component/Orders";
import "./App.css";
import {useState} from "react";

function App() {
    let [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);

    return (
        <BrowserRouter>
            <Navbar orderscount={orders.length}/>
            <Switch>
                <Route path="/photos" component={Photos} />
                <Route path="/products">
                    <Products setOrders={setOrders}/>
                </Route>
                <Route path="/orders">
                    <Orders orders={orders} setOrders={setOrders}/>
                </Route>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}
export default App