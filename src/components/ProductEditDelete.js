import { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { userContext } from "../App";

const ProductEditDelete = ({ item }) => {
  const { productsList, setProductsList, setProduct, setIsEditing, setEditId } =
    useContext(userContext);

  const { productId, name, category, arrivalDate, inStock, price } = item;
  const navigate = useNavigate();

  const editItem = () => {
    setIsEditing(true);
    setEditId(productId);
    setProduct({ ...item, productId: productId });
    setProduct({ ...item, name: name });
    setProduct({ ...item, category: category });
    setProduct({ ...item, arrivalDate: arrivalDate });
    setProduct({ ...item, inStock: inStock });
    setProduct({ ...item, price: price });

    return navigate("/edit/product");
  };

  const removeItem = () => {
    setProductsList(
      productsList.filter((item) => item.productId !== productId)
    );
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
