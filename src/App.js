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
  const [isEditing, setIsEditing] = useState(false);

  return (
    <userContext.Provider
      value={{
        isEditing,
        setIsEditing,
      }}
    >
      <div className="App">
        <div className="App-body">
          <Router>
            <Routes>
              <Route exact path="" element={<LoginPageView />} />
              <Route exact path="/home" element={<HomePageView />} />
              <Route exact path="/products" element={<ProductPageView />} />
              <Route exact path="/orders" element={<OrderPageView />} />
              <Route exact path="/cart" element={<CartPageView />} />
              <Route exact path="/login" element={<LoginPageView />} />
              <Route exact path="/product/add" element={<AddProduct />} />
              <Route exact path="/product/edit" element={<AddProduct />} />
              <Route exact path="/order/add" element={<AddOrder />} />
              <Route exact path="/order/edit" element={<AddOrder />} />
            </Routes>
          </Router>
        </div>
      </div>
    </userContext.Provider>
  );
}

export default App;
