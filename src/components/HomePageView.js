import { useContext } from "react";
import { userContext } from "../App";

const HomePageView = () => {
  const { productColName, orderColName } = useContext(userContext);

  return (
    <div>
      <div className="homePage" style={{ marginTop: "5rem" }}>
        <h3>Products</h3>
        <table cellSpacing="0" id="customers">
          <thead>
            <tr>
              {productColName.map((obj, index) => {
                return <th key={index}>{obj}</th>;
              })}
            </tr>
          </thead>
        </table>
      </div>
      <div className="homePage">
        <h3>Orders</h3>
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

export default HomePageView;
