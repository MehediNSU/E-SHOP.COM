const initialData = {
  ordersList: [],
};

const orderReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      const { data } = action.payload;
      return {
        ...state,
        ordersList: [...state.ordersList, data],
      };

    case "EDIT_ORDER":
      const { order } = action.payload;
      state.ordersList.map((item) => {
        if (item.orderId === order.orderId) {
          item.customerName = order.customerName;
          item.contact = order.contact;
          item.status = order.status;
          item.productName = order.productName;
          item.total = order.total;
        }
        return item;
      });

      return state;

    case "DELETE_ORDER":
      const { id } = action.payload;
      const newOrdersList = state.ordersList.filter(
        (item) => item.orderId !== id
      );
      return {
        ...state,
        ordersList: newOrdersList,
      };
    default:
      return state;
  }
};

export default orderReducer;
