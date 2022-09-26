import { editList, filterList } from "./helpers/helper";

//Action type
export const ADD_ORDER = "ORDER/ADD";
export const EDIT_ORDER = "ORDER/EDIT";
export const DELETE_ORDER = "ORDER/DELETE";

//Action function
export const addOrder = (newOrder, Id) => {
  const newId = Id + 1;
  const order = { ...newOrder, orderId: newId };
  return {
    type: ADD_ORDER,
    payload: {
      newOrder: order,
      newId: newId,
    },
  };
};

export const deleteOrder = (ordersList, orderId) => {
  const newOrdersList = filterList(ordersList, "orderId", orderId);

  return {
    type: DELETE_ORDER,
    payload: {
      ordersList_delete: newOrdersList,
    },
  };
};

export const editOrder = (ordersList, updatedOrder) => {
  const newOrdersList = editList(ordersList, "orderId", updatedOrder);
  return {
    type: EDIT_ORDER,
    payload: {
      ordersList_edit: newOrdersList,
    },
  };
};

//Default State
const initialData = {
  ordersList: [],
  countId: 1,
};

//State updating
const orderReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const { newOrder, newId } = action.payload;
      return {
        ...state,
        countId: newId,
        ordersList: [...state.ordersList, newOrder],
      };

    case EDIT_ORDER:
      const { ordersList_edit } = action.payload;
      return {
        ...state,
        ordersList: ordersList_edit,
      };

    case DELETE_ORDER:
      const { ordersList_delete } = action.payload;

      return {
        ...state,
        ordersList: ordersList_delete,
      };

    default:
      return state;
  }
};

export default orderReducer;
