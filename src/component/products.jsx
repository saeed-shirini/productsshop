import {useState,useEffect} from "react";
import axios from "axios";
import ProductCategory from "./ProductCategory";
import Product from "./Product";
import "./products.css";

function Products({setOrders}){
    const [products,setProducts] = useState(JSON.parse(localStorage.getItem("products")) || []);
    let orderList = products.filter(p => p.count !== 0);
    //const [orders,setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);
    let newProducts = [...products];

    useEffect(async()=>{
        const getAllProducts = await axios.get("https://fakestoreapi.com/products");
        const result = getAllProducts.data;
        const data = result.map((d)=>{
            d.count = 0;
            return d;
        })
        if(JSON.parse(localStorage.getItem("products")).length !== 0){
            setProducts(JSON.parse(localStorage.getItem("products")));
        }else{
            setProducts(data)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("orders",JSON.stringify(orderList));
        localStorage.setItem("products",JSON.stringify(products));
        setOrders(orderList)
    },[products])

    let lastCategory = null;
    let rows = [];
    products.forEach((product,productIndex)=>{
        if(lastCategory !== product.category){
            lastCategory = product.category;
            rows.push(<ProductCategory category={lastCategory} key={productIndex}/>);
        }
        rows.push(<Product onIncrement={handleIncrement} onDecrement={handleDecrement} product={product} key={product.title} id={product.id} />);
    })
    return (
        <div className="product-container">
            {rows}
        </div>
    )

    function handleIncrement(id){
        const findProduct = newProducts.find(function(p){
            return p.id === id;
        })
        findProduct.count += 1;
        setProducts(newProducts)
        //changeBasket(findProduct,"i")
    }

    function handleDecrement(id){
        const findProduct = newProducts.find(function(p){
            return p.id === id;
        })
        if(findProduct.count <= 1){
            findProduct.count = 0
        }else{
            findProduct.count -= 1;
        }
       // changeBasket(findProduct,"d")
        setProducts(newProducts) 
    }

    /*function changeBasket(product,flag){
        const findProduct = orders.find(o => o.id === product.id);
        const orderList = products.filter((p) => p.count !== 0);
        if(product.count === 0){
            const newOrder = orders.filter((o) => o.count !== 0);
            setOrders(newOrder)
        }
        if(flag === "i"){
            if(!findProduct){
                setOrders([...orders,product])
            }else{   
                setOrders(orderList)
            }
        }else{
            setOrders(orderList)
        }
    }*/
}

export default Products;