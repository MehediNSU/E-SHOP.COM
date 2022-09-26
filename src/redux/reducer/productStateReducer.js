//Action type
export const UPDATE_STATE = "UPDATE/PRODUCT";

//Action function
export const setProduct = (updatedProduct) => {
  return {
    type: UPDATE_STATE,
    payload: {
      updatedProduct: updatedProduct,
    },
  };
};

//Default State
const initialData = {
  product: {
    productId: 0,
    name: "",
    category: "",
    arrivalDate: "",
    inStock: 0,
    price: 0,
  },
};

//State updating
const productStateReducer = (state = initialData, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      const { updatedProduct } = action.payload;
      return {
        ...state,
        product: updatedProduct,
      };

    default:
      return state;
  }
};

export default productStateReducer;
