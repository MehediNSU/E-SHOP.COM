import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setProduct } from "../redux/reducer/productStateReducer";
import {
  addProduct,
  editProduct,
} from "../redux/reducer/productFunctionReducer";

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const productsList = useSelector(
    (state) => state.productReducer.productsList
  );
  const product = useSelector((state) => state.productStateReducer.product);
  const countId = useSelector((state) => state.productReducer.countId);

  //local state
  const { name, arrivalDate, inStock, price } = product;

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    dispatch(setProduct({ ...product, [name]: value }));
  };

  const onSaveHandler = () => {
    if (location.pathname === "/product/edit") {
      dispatch(editProduct(productsList, product));
      alert("Your information updated.");
    } else {
      dispatch(addProduct(product, countId));
      alert("Your information saved.");
    }
    dispatch(
      setProduct({
        name: "",
        category: "",
        arrivalDate: "",
        inStock: "",
        price: "",
      })
    );
    return navigate(-1);
  };

  const onCancelHandler = () => {
    dispatch(
      setProduct({
        name: "",
        category: "",
        arrivalDate: "",
        inStock: 0,
        price: 0,
      })
    );
    return navigate(-1);
  };

  return (
    <div className="addProduct">
      <h2 style={{ textAlign: "center" }}>Add Product Form</h2>
      <div className="addProductDiv">
        <label htmlfor="name" className="">
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
        <label htmlfor="category">Category</label>
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
        <label htmlfor="arrivalDate" className="">
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
        <label htmlfor="inStock" className="">
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
        <label htmlfor="price" className="">
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
