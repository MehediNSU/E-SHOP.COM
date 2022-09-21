import { useContext } from "react";
import { userContext } from "../App";

const OrderPageView = () => {
  const { searchItem, setSearchItem, orderColName } = useContext(userContext);

  return (
    <div>
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
