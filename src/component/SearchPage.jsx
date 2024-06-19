import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import "./searchpage.css";


function SearchPage() {
    let [searchText, setSearchText] = useState("");
    let [filteredProducts, setfilteredProducts] = useState([]);
    let [errors,setErrors] = useState("");
    const getProducts = JSON.parse(localStorage.getItem("products"));

    function handleFindProduct() {
        setErrors("");
        setfilteredProducts([]);
        if(searchText.length === 0) return setErrors("pls enter serach input"); 
        const filterProducts = getProducts.filter((p) => {
            return p.title.toLowerCase().includes(searchText)
        })
        if(filterProducts.length === 0){
            setErrors("product not found");
        }else{
            return setfilteredProducts(filterProducts);
        }
    }
    return (
        <div className="search-page">
            <div className="search-form">
                <input type="text" placeholder="search product" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="search-icon" onClick={handleFindProduct}><FontAwesomeIcon icon={faSearch} /></button>
            </div>

            <div className="find-product">
                {errors.length !== 0 ? errors : filteredProducts.map(p => {
                    return <Product product={p} id={p.id} key={p.id}/>
                })}
            </div>
        </div>
    )
}

export default SearchPage;