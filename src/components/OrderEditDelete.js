import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteOrder } from "../redux/Action.js";

import { userContext } from "../App";

const OrderEditDelete = ({ item }) => {
  const { setOrder, setIsEditing } = useContext(userContext);

  const { orderId, customerName, contact, status, productName, total } = item;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editItem = () => {
    setIsEditing(true);
    setOrder({ ...item, orderId: orderId });
    setOrder({ ...item, customerName: customerName });
    setOrder({ ...item, contact: contact });
    setOrder({ ...item, status: status });
    setOrder({ ...item, productName: productName });
    setOrder({ ...item, total: total });

    return navigate("/edit/order");
  };

  const removeItem = () => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <div style={{ flexDirection: "row" }}>
      <button type="button" className="editButton" onClick={editItem}>
        <FaEdit />
      </button>
      <button type="button" className="deleteButton" onClick={removeItem}>
        <FaTrash />
      </button>
    </div>
  );
};

export default OrderEditDelete;
