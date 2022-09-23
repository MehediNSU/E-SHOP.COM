export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: {
      data: product,
    },
  };
};

export const editProduct = (product) => {
  return {
    type: "EDIT_PRODUCT",
    payload: {
      product: product,
    },
  };
};

export const deleteProduct = (productId) => {
  return {
    type: "DELETE_PRODUCT",
    payload: {
      id: productId,
    },
  };
};

export const addOrder = (order) => {
  return {
    type: "ADD_ORDER",
    payload: {
      data: order,
    },
  };
};

export const editOrder = (order) => {
  return {
    type: "EDIT_ORDER",
    payload: {
      order: order,
    },
  };
};

export const deleteOrder = (orderId) => {
  return {
    type: "DELETE_ORDER",
    payload: {
      id: orderId,
    },
  };
};
