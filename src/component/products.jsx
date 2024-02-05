import {useState,useEffect} from "react";
import axios from "axios";
import ProductCategory from "./ProductCategory";
import Product from "./Product";
import "./products.css"

function Products(){
    const [products,setProducts] = useState([]);
    const [order,setOrder] = useState([]);
    let newProducts = [...products];

    useEffect(async()=>{
        const getAllProducts = await axios.get("https://fakestoreapi.com/products");
        const result = getAllProducts.data;
        const data = result.map((d)=>{
            d.count = 0;
            return d;
        })
        setProducts(data);
    },[])

    useEffect(()=>{
        handleTotalPrice()
    },[order])

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
        changeBasket(findProduct)
    }

    function handleDecrement(id){
        const findProduct = newProducts.find(function(p){
            return p.id === id;
        })
        let countProduct = findProduct.count === 0 ?  findProduct.count = 0 :  findProduct.count -= 1;
        setProducts(newProducts)
        changeBasket(findProduct)
    }

    function changeBasket(product){
        const findProduct = order.find(o => o.id === product.id);
        if(!findProduct){
            setOrder([...order,product])
        }else{   
            setOrder([...order])
        }
        if(product.count === 0){
            const newOrder = order.filter((o) => o.count !== 0);
            setOrder(newOrder)
        }
    }

    function handleTotalPrice(){
        const totalPrice = order.reduce((total,current) => {
            return Math.round(total + (current.count * current.price));
        },0)
        localStorage.setItem("orders",JSON.stringify(order))
    }
}

export default Products;