import { useContext } from "react";
import { userContext } from "../App";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";

const OrderPageView = () => {
  const { authorized, searchItem, setSearchItem, orderColName } =
    useContext(userContext);
  if (authorized === false) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar />
      <div className="productPage" style={{ marginTop: "5rem" }}>
        <input
          type="text"
          placeholder="🔍 Search Orders"
          className="search-input"
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <button className="btn">Add</button>
      </div>
      <div className="productPage">
        <table cellSpacing="0" id="customers">
          <thead>
            <tr>
              {orderColName.map((obj, index) => {
                return <th key={index}>{obj}</th>;
              })}
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default OrderPageView;
