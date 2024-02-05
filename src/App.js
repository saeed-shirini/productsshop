import Navbar from "./component/Navbar";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./component/Home";
import Photos from "./component/Photos";
import Products from "./component/products";
import Orders from "./component/Orders";
import {useState} from "react";

function App(){
    //const [orders,setOrders] = useState([]);

    return(
        <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/photos" component={Photos}/>
                    <Route path="/products">
                        <Products setOrders={setOrders}/>
                    </Route>
                    <Route path="/orders">
                        <Orders />
                    </Route>
                    <Route path="/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App