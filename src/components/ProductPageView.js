import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { userContext } from "../App";
import ProductEditDelete from "./ProductEditDelete";
import Navbar from "./Navbar";

const ProductPageView = () => {
  const {
    authorized,
    searchItem,
    setSearchItem,
    productColName,
    productsList,
  } = useContext(userContext);
  const navigate = useNavigate();

  if (authorized === false) {
    return navigate("/login");
  }

  const onClickHandler = () => {
    return navigate("/add/product");
  };

  return (
    <div>
      <Navbar />
      <div className="productPage" style={{ marginTop: "5rem" }}>
        <input
          type="text"
          placeholder="🔍 Search Products"
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
              {productColName.map((obj, index) => {
                return <th key={index}>{obj}</th>;
              })}
              <th>Buttons</th>
            </tr>
          </thead>
          {console.log("productslist", productsList)}
          {productsList
            .filter((item) => {
              if (searchItem === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return item;
              }
              return "";
            })
            .map((item) => {
              return (
                <tbody>
                  <tr>
                    <td key={0}>{item.productId}</td>
                    <td key={1}>{item.name}</td>
                    <td key={2}>{item.category}</td>
                    <td key={3}>{item.arrivalDate}</td>
                    <td key={4}>{item.inStock}</td>
                    <td key={5}>{item.price}</td>
                    <td>
                      <ProductEditDelete item={item} />
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

export default ProductPageView;
