import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addOrder, editOrder } from "../redux/reducer/orderFunctionReducer";
import { setOrder } from "../redux/reducer/orderStateReducer";

const AddOrder = () => {
  //Hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const ordersList = useSelector((state) => state.orderReducer.ordersList);
  const order = useSelector((state) => state.orderStateReducer.order);
  const countId = useSelector((state) => state.orderReducer.countId);
  const { customerName, contact, productName, total } = order;

  //Functions
  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    dispatch(setOrder({ ...order, [name]: value }));
  };
  const onSaveHandler = () => {
    if (location.pathname === "/order/edit") {
      dispatch(editOrder(ordersList, order));
      alert("Your information updated.");
      return navigate("/orders");
    } else {
      dispatch(addOrder(order, countId));
      alert("Your information saved.");
    }
    dispatch(
      setOrder({
        customerName: "",
        contact: "",
        status: "",
        productName: "",
        total: "",
      })
    );
    return navigate(-1);
  };
  const onCancelHandler = () => {
    dispatch(
      setOrder({
        customerName: "",
        contact: "",
        status: "",
        productName: "",
        total: 0,
      })
    );
    return navigate(-1);
  };

  return (
    <div className="addProduct">
      <h2 style={{ textAlign: "center" }}>Add Order Form</h2>
      <div className="addProductDiv">
        <label htmlFor="customerName" className="">
          Customer Name
        </label>
        <input
          className="addProductInput"
          type="text"
          name="customerName"
          id="customerName"
          value={customerName}
          onChange={onChangeHandler}
          placeholder="Enter your name"
        />
      </div>
      <div className="addProductDiv">
        <label htmlfor="contact" className="">
          Contact Number
        </label>
        <input
          className="addProductInput"
          type="text"
          name="contact"
          id="contact"
          autoComplete="off"
          value={contact}
          onChange={onChangeHandler}
          placeholder="Enter contact number"
        />
      </div>
      <div className="addProductDiv">
        <label htmlfor="status">Order Status</label>
        <select
          className="addProductInput"
          id="status"
          name="status"
          onChange={onChangeHandler}
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="On way">On way</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
      <div className="addProductDiv">
        <label htmlfor="productName" className="">
          Product Name
        </label>
        <input
          className="addProductInput"
          type="text"
          name="productName"
          id="productName"
          autoComplete="off"
          value={productName}
          onChange={onChangeHandler}
          placeholder="Enter product name"
        />
      </div>
      <div className="addProductDiv">
        <label htmlfor="total" className="">
          Total (Tk.)
        </label>
        <input
          type="number"
          name="total"
          id="total"
          autoComplete="off"
          value={total}
          onChange={onChangeHandler}
          className="addProductInput"
          placeholder="Enter product price (Tk)"
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

export default AddOrder;
