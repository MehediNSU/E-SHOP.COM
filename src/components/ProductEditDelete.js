import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../redux/Action.js";

import { userContext } from "../App";

const ProductEditDelete = ({ item }) => {
  const { setProduct, setIsEditing } = useContext(userContext);

  const { productId, name, category, arrivalDate, inStock, price } = item;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const editItem = () => {
    setIsEditing(true);
    setProduct({ ...item, productId: productId });
    setProduct({ ...item, name: name });
    setProduct({ ...item, category: category });
    setProduct({ ...item, arrivalDate: arrivalDate });
    setProduct({ ...item, inStock: inStock });
    setProduct({ ...item, price: price });

    return navigate("/edit/product");
  };

  const removeItem = () => {
    dispatch(deleteProduct(productId));
  };

  return (
    <div style={{ flexDirection: "row" }}>
      <button type="button" className="editButton" onClick={() => editItem()}>
        <FaEdit />
      </button>
      <button
        type="button"
        className="deleteButton"
        onClick={() => removeItem()}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default ProductEditDelete;
