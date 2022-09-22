import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { userContext } from "../App";

const AddOrder = () => {
  const {
    authorized,
    setOrder,
    ordersList,
    setOrdersList,
    countOrderId,
    setCountOrderId,
    isEditing,
    setIsEditing,
    editId,
    setEditId,
  } = useContext(userContext);
  let { order } = useContext(userContext);
  const navigate = useNavigate();
  const { orderId, customerName, contact, status, productName, total } = order;

  if (authorized === false) {
    return navigate("/login");
  }

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setOrder({ ...order, [name]: value });
  };
  const onSaveHandler = () => {
    if (isEditing) {
      setOrdersList(
        ordersList.map((item) => {
          if (item.orderId === editId) {
            item = {
              ...item,
              orderId: orderId,
              customerName: customerName,
              contact: contact,
              status: status,
              productName: productName,
              total: total,
            };
            setOrdersList([...ordersList, item]);
            alert("Your information updated.");
            setOrder({
              customerName: "",
              contact: "",
              status: "",
              productName: "",
              total: "",
            });
          }
          return item;
        })
      );
      setEditId(null);
      setIsEditing(false);
    } else {
      setCountOrderId(countOrderId + 1);
      order = { ...order, orderId: countOrderId };
      setOrdersList([...ordersList, order]);
      alert("Your information saved.");
      setOrder({
        customerName: "",
        contact: "",
        status: "",
        productName: "",
        total: "",
      });
    }
  };
  const onCancelHandler = () => {
    setOrder({
      customerName: "",
      contact: "",
      status: "",
      productName: "",
      total: "",
    });
    return navigate("/orders");
  };

  return (
    <div className="addProduct">
      <h2 style={{ textAlign: "center" }}>Add Order Form</h2>
      <div className="addProductDiv">
        <label for="customerName" className="">
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
        <label for="contact" className="">
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
        <label for="status">Order Status</label>
        <select
          className="addProductInput"
          id="status"
          name="status"
          onChange={onChangeHandler}
        >
          <option value="">Select Status</option>
          <option value="Prending">Pending</option>
          <option value="On way">On way</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
      <div className="addProductDiv">
        <label for="productName" className="">
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
        <label for="total" className="">
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
