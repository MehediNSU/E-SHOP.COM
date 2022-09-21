import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import AddOrder from "./components/AddOrder";
import AddProduct from "./components/AddProduct";
import HomePageView from "./components/HomePageView";
import LoginPageView from "./components/LoginPageView";
import OrderPageView from "./components/OrderPageView";
import ProductPageView from "./components/ProductPageView";

export const userContext = createContext();

const getLocalStorage = () => {
  let productsList = localStorage.getItem("productsList");
  if (productsList) {
    return (productsList = JSON.parse(productsList));
  } else {
    return [];
  }
};
const getOrderLocalStorage = () => {
  let ordersList = localStorage.getItem("ordersList");
  if (ordersList) {
    return (ordersList = JSON.parse(ordersList));
  } else {
    return [];
  }
};

function App() {
  const [productsList, setProductsList] = useState(getLocalStorage());
  let [product, setProduct] = useState({
    productId: 0,
    name: "",
    category: "",
    arrivalDate: "",
    inStock: 0,
    price: 0,
  });
  const productColName = [
    "Product ID",
    "Product Name",
    "Category",
    "Arrival Date",
    "In Stock (Qty)",
    "Price",
  ];
  const [ordersList, setOrdersList] = useState(getOrderLocalStorage());
  let [order, setOrder] = useState({
    orderId: 0,
    customerName: "",
    contact: "",
    status: "",
    productName: "",
    total: 0,
  });
  const orderColName = [
    "Order ID",
    "Customer Name",
    "Customer Contact",
    "Order Status",
    "Product Name",
    "Total (Tk)",
  ];
  const [searchItem, setSearchItem] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [countProductId, setCountProductId] = useState(1);
  const [countOrderId, setCountOrderId] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("productsList", JSON.stringify(productsList));
  }, [productsList]);

  useEffect(() => {
    localStorage.setItem("ordersList", JSON.stringify(ordersList));
  }, [ordersList]);

  return (
    <userContext.Provider
      value={{
        productColName,
        orderColName,
        searchItem,
        setSearchItem,
        authorized,
        setAuthorized,
        productsList,
        setProductsList,
        product,
        setProduct,
        countProductId,
        setCountProductId,
        ordersList,
        setOrdersList,
        order,
        setOrder,
        countOrderId,
        setCountOrderId,
        isEditing,
        setIsEditing,
        editId,
        setEditId,
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
