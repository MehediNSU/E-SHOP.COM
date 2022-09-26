import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const HomePageView = () => {
  const productsList = useSelector(
    (state) => state.productReducer.productsList
  );
  const ordersList = useSelector((state) => state.orderReducer.ordersList);

  //local state
  const productColName = [
    "Product ID",
    "Product Name",
    "Category",
    "Arrival Date",
    "In Stock (Qty)",
    "Price",
  ];
  const orderColName = [
    "Order ID",
    "Customer Name",
    "Contact Number",
    "Order Status",
    "Product Name",
    "Total (Tk)",
  ];

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
            {productsList.map((item, index) => {
              return (
                <tr key={index}>
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
            {ordersList.map((item, index) => {
              return (
                <tr key={index}>
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
