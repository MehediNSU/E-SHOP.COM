import { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import { userContext } from "../App";

const HomePageView = () => {
  const { authorized, productColName, orderColName } = useContext(userContext);
  const productsList = useSelector(
    (state) => state.productReducer.productsList
  );
  const ordersList = useSelector((state) => state.orderReducer.ordersList);
  if (authorized === false) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar />
      <div className="" style={{ marginTop: "5rem" }}>
        <h3 style={{ marginLeft: "5rem" }}>Products</h3>
        <table cellSpacing="0" id="customers">
          <thead>
            <tr>
              {productColName.map((obj, index) => {
                return <th key={index}>{obj}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {productsList.map((item) => {
              return (
                <tr>
                  <td key={0}>{item.productId}</td>
                  <td key={1}>{item.name}</td>
                  <td key={2}>{item.category}</td>
                  <td key={3}>{item.arrivalDate}</td>
                  <td key={4}>{item.inStock}</td>
                  <td key={5}>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="">
        <h3 style={{ marginLeft: "5rem" }}>Orders</h3>
        <table cellSpacing="0" id="customers">
          <thead>
            <tr>
              {orderColName.map((obj, index) => {
                return <th key={index}>{obj}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {ordersList.map((item) => {
              return (
                <tr>
                  <td key={0}>{item.orderId}</td>
                  <td key={1}>{item.customerName}</td>
                  <td key={2}>{item.contact}</td>
                  <td key={3}>{item.status}</td>
                  <td key={4}>{item.productName}</td>
                  <td key={5}>{item.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePageView;
