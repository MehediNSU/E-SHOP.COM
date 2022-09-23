import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userContext } from "../App";
import Navbar from "./Navbar";

import OrderEditDelete from "./OrderEditDelete";

const OrderPageView = () => {
  const { authorized, searchItem, setSearchItem, orderColName } =
    useContext(userContext);
  const navigate = useNavigate();
  const ordersList = useSelector((state) => state.orderReducer.ordersList);

  if (authorized === false) {
    return navigate("/login");
  }

  const onClickHandler = () => {
    return navigate("/add/order");
  };

  return (
    <div>
      <Navbar />
      <div className="productPage" style={{ marginTop: "5rem" }}>
        <input
          type="text"
          placeholder="🔍 Search Orders"
          className="search-input"
          style={{ width: "40rem" }}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <button className="btn" onClick={onClickHandler}>
          Add
        </button>
      </div>
      <div className="tableView">
        <table cellSpacing="0" id="customers">
          <thead>
            <tr>
              {orderColName.map((obj, index) => {
                return <th key={index}>{obj}</th>;
              })}
              <th>Buttons</th>
            </tr>
          </thead>
          {ordersList
            .filter((item) => {
              if (searchItem === "") {
                return item;
              } else if (
                item.customerName
                  .toLowerCase()
                  .includes(searchItem.toLowerCase())
              ) {
                return item;
              }
              return "";
            })
            .map((item) => {
              return (
                <tbody>
                  <tr>
                    <td key={0}>{item.orderId}</td>
                    <td key={1}>{item.customerName}</td>
                    <td key={2}>{item.contact}</td>
                    <td key={3}>{item.status}</td>
                    <td key={4}>{item.productName}</td>
                    <td key={5}>{item.total}</td>
                    <td>
                      <OrderEditDelete item={item} />
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default OrderPageView;
