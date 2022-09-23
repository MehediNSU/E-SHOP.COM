const initialData = {
  productsList: [],
};

const productReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const { data } = action.payload;
      return {
        ...state,
        productsList: [...state.productsList, data],
      };

    case "EDIT_PRODUCT":
      const { product } = action.payload;
      state.productsList.map((item) => {
        if (item.productId === product.productId) {
          item.productId = product.productId;
          item.name = product.name;
          item.category = product.category;
          item.arrivalDate = product.arrivalDate;
          item.inStock = product.inStock;
          item.price = product.price;
        }
        return item;
      });

      console.log(state.productsList);
      return state;

    case "DELETE_PRODUCT":
      const { id } = action.payload; //data is object
      const newProductList = state.productsList.filter(
        (item) => item.productId !== id
      );
      return {
        ...state,
        productsList: newProductList,
      };
    default:
      return state;
  }
};

export default productReducer;
