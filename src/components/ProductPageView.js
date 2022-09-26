import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import { deleteProduct } from "../redux/reducer/productFunctionReducer";
import { setProduct } from "../redux/reducer/productStateReducer";

const ProductPageView = () => {
  //Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productsList = useSelector(
    (state) => state.productReducer.productsList
  );
  const productColName = [
    { label: "Product ID", name: "productId" },
    { label: "Product Name", name: "name" },
    { label: "Category", name: "category" },
    { label: "Arrival Date", name: "arrivalDate" },
    { label: "In Stock (Qty)", name: "inStock" },
    { label: "Price", name: "price" },
    { label: "Buttons", name: "button" }, //this will add with Product Page View
  ];
  const [searchItem, setSearchItem] = useState("");

  //Functions
  const editItem = (item) => {
    dispatch(setProduct(item));
    return navigate("/product/edit");
  };

  const removeItem = (productId) => {
    dispatch(deleteProduct(productsList, productId));
  };

  const onAddButtonHandler = () => {
    return navigate("/product/add");
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
        <button className="btn" onClick={onAddButtonHandler}>
          Add
        </button>
      </div>
      <div className="tableView">
        <table cellSpacing="0" id="customers">
          <thead>
            <tr>
              {productColName.map((obj, index) => {
                for (var label in obj) {
                  return <th key={index}>{obj[label]}</th>;
                }
                return productColName;
              })}
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
            .map((item, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td key={0}>{item.productId}</td>
                    <td key={1}>{item.name}</td>
                    <td key={2}>{item.category}</td>
                    <td key={3}>{item.arrivalDate}</td>
                    <td key={4}>{item.inStock}</td>
                    <td key={5}>{item.price}</td>
                    <td key={6}>
                      <div style={{ flexDirection: "row" }}>
                        <button
                          type="button"
                          className="editButton"
                          onClick={() => editItem(item)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          type="button"
                          className="deleteButton"
                          onClick={() => removeItem(item.productId)}
                        >
                          <FaTrash />
                        </button>
                      </div>
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
