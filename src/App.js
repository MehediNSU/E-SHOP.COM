import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import AddOrder from "./components/AddOrder";
import AddProduct from "./components/AddProduct";
import HomePageView from "./components/HomePageView";
import LoginPageView from "./components/LoginPageView";
import OrderPageView from "./components/OrderPageView";
import ProductPageView from "./components/ProductPageView";
import CartPageView from "./components/CartPageView";

export const userContext = createContext();

function App() {
  let [product, setProduct] = useState({
    productId: 0,
    name: "",
    category: "",
    arrivalDate: "",
    inStock: "",
    price: "",
  });
  const productColName = [
    "Product ID",
    "Product Name",
    "Category",
    "Arrival Date",
    "In Stock (Qty)",
    "Price",
  ];
  const [countProductId, setCountProductId] = useState(1);
  let [order, setOrder] = useState({
    orderId: 0,
    customerName: "",
    contact: "",
    status: "",
    productName: "",
    total: "",
  });
  const orderColName = [
    "Order ID",
    "Customer Name",
    "Contact Number",
    "Order Status",
    "Product Name",
    "Total (Tk)",
  ];

  const [searchItem, setSearchItem] = useState("");
  const [countOrderId, setCountOrderId] = useState(1);
  const [authorized, setAuthorized] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <userContext.Provider
      value={{
        productColName,
        product,
        setProduct,
        countProductId,
        setCountProductId,
        orderColName,
        order,
        setOrder,
        countOrderId,
        setCountOrderId,
        isEditing,
        setIsEditing,
        searchItem,
        setSearchItem,
        authorized,
        setAuthorized,
      }}
    >
      <div className="App">
        <div className="App-body">
          <Router>
            <Routes>
              <Route path="" element={<LoginPageView />} />
              <Route path="/home" element={<HomePageView />} />
              <Route path="/products" element={<ProductPageView />} />
              <Route path="/orders" element={<OrderPageView />} />
              <Route path="/login" element={<LoginPageView />} />
              <Route path="/cart" element={<CartPageView />} />
              <Route path="/add/product" element={<AddProduct />} />
              <Route path="/edit/product/" element={<AddProduct />} />
              <Route path="/add/order" element={<AddOrder />} />
              <Route path="/edit/order/" element={<AddOrder />} />
            </Routes>
          </Router>
        </div>
      </div>
    </userContext.Provider>
  );
}

export default App;
