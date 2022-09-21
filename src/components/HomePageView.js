import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { userContext } from "../App";
import Navbar from "./Navbar";

const HomePageView = () => {
  const { authorized, productColName, orderColName, productsList, ordersList } =
    useContext(userContext);

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
                  {Object.values(item).map((obj, index) => {
                    return <td key={index}>{obj}</td>;
                  })}
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
                  {Object.values(item).map((obj, index) => {
                    return <td key={index}>{obj}</td>;
                  })}
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
