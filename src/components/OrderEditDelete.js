import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { userContext } from "../App";

const OrderEditDelete = ({ item }) => {
  const { ordersList, setOrdersList, setOrder, setIsEditing, setEditId } =
    useContext(userContext);

  const { orderId, customerName, contact, status, productName, total } = item;
  const navigate = useNavigate();

  const editItem = () => {
    // const editItem = list.find((item) => item.id === id );
    setIsEditing(true);
    setEditId(orderId);
    setOrder({ ...item, orderId: orderId });
    setOrder({ ...item, customerName: customerName });
    setOrder({ ...item, contact: contact });
    setOrder({ ...item, status: status });
    setOrder({ ...item, productName: productName });
    setOrder({ ...item, total: total });

    return navigate("/edit/order");
  };

  const removeItem = () => {
    setOrdersList(ordersList.filter((item) => item.orderId !== orderId));
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
