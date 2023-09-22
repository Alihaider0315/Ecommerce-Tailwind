import { createContext,useState } from "react";
import axios from "axios";

const CartItems = createContext();
const CartItemProvider = ({children}) => {
    let [itemQuantity , setItemQuantity] = useState(0);
    const incrementQuantity = () =>{
        setItemQuantity(++itemQuantity);
    }
    // Fetch Product From API
    const [myData , setmyData] = useState([]);
    const fetchProduct = () => {
        axios.get("https://api.pujakaitem.com/api/products")
        .then((res)=> setmyData(res.data))
    }
    let ObjToSend = {
    itemQuantity ,
    incrementQuantity,
    fetchProduct,
    myData,    
}
return <CartItems.Provider value={ObjToSend}>{children}</CartItems.Provider>
}

export {CartItems,CartItemProvider}