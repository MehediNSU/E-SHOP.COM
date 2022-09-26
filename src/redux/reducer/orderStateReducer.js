//Action type
export const UPDATE_STATE = "UPDATE/ORDER";

//Action function
export const setOrder = (updatedOrder) => {
  return {
    type: UPDATE_STATE,
    payload: {
      updatedOrder: updatedOrder,
    },
  };
};

//Default State
const initialData = {
  order: {
    orderId: 0,
    customerName: "",
    contact: "",
    status: "",
    productName: "",
    total: 0,
  },
};

//State updating
const orderStateReducer = (state = initialData, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      const { updatedOrder } = action.payload;
      return {
        ...state,
        order: updatedOrder,
      };

    default:
      return state;
  }
};

export default orderStateReducer;
