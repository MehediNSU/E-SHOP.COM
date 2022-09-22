import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { userContext } from "../App";

const AddProduct = () => {
  const {
    authorized,
    setProduct,
    productsList,
    setProductsList,
    countProductId,
    setCountProductId,
    isEditing,
    setIsEditing,
    editId,
    setEditId,
  } = useContext(userContext);
  let { product } = useContext(userContext);
  const navigate = useNavigate();
  const { productId, name, category, arrivalDate, inStock, price } = product;

  if (authorized === false) {
    return navigate("/login");
  }

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setProduct({ ...product, [name]: value });
  };
  const onSaveHandler = () => {
    if (isEditing === true) {
      setProductsList(
        productsList.map((item) => {
          if (item.productId === editId) {
            item = {
              ...item,
              productId: productId,
              name: name,
              category: category,
              arrivalDate: arrivalDate,
              inStock: inStock,
              price: price,
            };
            setProductsList([...productsList, item]);
            alert("Your information updated");
            setProduct({
              name: "",
              category: "",
              arrivalDate: "",
              inStock: "",
              price: "",
            });
          }
          return item;
        })
      );
      setEditId(null);
      setIsEditing(false);
    } else {
      setCountProductId(countProductId + 1);
      product = { ...product, productId: countProductId };

      setProductsList([...productsList, product]);
      alert("Your information saved.");
      setProduct({
        name: "",
        category: "",
        arrivalDate: "",
        inStock: "",
        price: "",
      });
    }
  };
  const onCancelHandler = () => {
    setProduct({
      name: "",
      category: "",
      arrivalDate: "",
      inStock: 0,
      price: 0,
    });
    return navigate("/products");
  };

  return (
    <div className="addProduct">
      <h2 style={{ textAlign: "center" }}>Add Product Form</h2>
      <div className="addProductDiv">
        <label for="name" className="">
          Product Name
        </label>
        <input
          className="addProductInput"
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={name}
          onChange={onChangeHandler}
          placeholder="Enter product name"
        />
      </div>
      <div className="addProductDiv">
        <label for="category">Category</label>
        <select
          className="addProductInput"
          id="category"
          name="category"
          onChange={onChangeHandler}
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Sports">Sports</option>
          <option value="Fashion">Fashion</option>
          <option value="Home & Garden">Home & Garden</option>
        </select>
      </div>
      <div className="addProductDiv">
        <label for="arrivalDate" className="">
          Arrival Date
        </label>
        <input
          type="date"
          name="arrivalDate"
          id="arrivalDate"
          autoComplete="off"
          value={arrivalDate}
          onChange={onChangeHandler}
          className="addProductInput"
          placeholder="Enter your arrival date"
        />
      </div>
      <div className="addProductDiv">
        <label for="inStock" className="">
          In Stock (Qty.)
        </label>
        <input
          type="number"
          name="inStock"
          id="inStock"
          autoComplete="off"
          value={inStock}
          onChange={onChangeHandler}
          className="addProductInput"
          placeholder="Enter product in stock (Qty.)"
        />
      </div>
      <div className="addProductDiv">
        <label for="price" className="">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          autoComplete="off"
          value={price}
          onChange={onChangeHandler}
          className="addProductInput"
          placeholder="Enter price (Tk.)"
        />
      </div>
      <div>
        <button type="button" className="" onClick={onSaveHandler}>
          Save
        </button>
        <button type="button" className="" onClick={onCancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
