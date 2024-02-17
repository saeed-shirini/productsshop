import Navbar from "./component/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Photos from "./component/Photos";
import Products from "./component/products";
import Orders from "./component/Orders";
import "./App.css";

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/photos" component={Photos} />
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/orders" component={Orders} />
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    )
}
export default App