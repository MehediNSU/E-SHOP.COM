import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

import HomePageView from "./components/HomePageView";
import LoginPageView from "./components/LoginPageView";
import OrderPageView from "./components/OrderPageView";
import CartPageView from "./components/CartPageView";
import ProductPageView from "./components/ProductPageView";

export const userContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const productColName = [
    "Product ID",
    "Name",
    "Category",
    "Arrival Date",
    "In Stock (Qty.)",
    "Price",
  ];
  const orderColName = [
    "Order ID",
    "Customer Name",
    "Customer Contact",
    "Order Status",
    "Product Name",
    "Total (Tk.)",
  ];
  const [searchItem, setSearchItem] = useState("");
  const [authorized, setAuthorized] = useState(false);

  return (
    <userContext.Provider
      value={{
        isLogin,
        setIsLogin,
        productColName,
        orderColName,
        searchItem,
        setSearchItem,
        authorized,
        setAuthorized,
      }}
    >
      <div className="App">
        <header></header>
        <body className="App-body">
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="" element={<LoginPageView />} />
              <Route exact path="/home" element={<HomePageView />} />
              <Route exact path="/products" element={<ProductPageView />} />
              <Route exact path="/orders" element={<OrderPageView />} />
              <Route exact path="/cart" element={<CartPageView />} />
              <Route exact path="/login" element={<LoginPageView />} />
            </Routes>
          </Router>
        </body>
      </div>
    </userContext.Provider>
  );
}

export default App;
