import { validCredentials } from "./helpers/helper";

//Action type
export const VALID_AUTH = "VALID/AUTH";
export const INVALID_AUTH = "INVALID/AUTH";

//Action function
export const setAuthorized = (updatedCredentials) => {
  const isValid = validCredentials(updatedCredentials);
  if (isValid) {
    return {
      type: VALID_AUTH,
      payload: {
        validUpdatedCredentials: updatedCredentials,
      },
    };
  } else {
    return {
      type: INVALID_AUTH,
      payload: {
        invalidUpdatedCredentials: updatedCredentials,
      },
    };
  }
};

//Default State
const initialData = {
  credentials: {
    username: "",
    password: "",
  },
  isAuthorized: false,
};

//State updating
const authReducer = (state = initialData, action) => {
  switch (action.type) {
    case VALID_AUTH:
      const { validUpdatedCredentials } = action.payload;
      return {
        ...state,
        credentials: validUpdatedCredentials,
        isAuthorized: true,
      };
    case INVALID_AUTH:
      const { invalidUpdatedCredentials } = action.payload;
      return {
        ...state,
        credentials: invalidUpdatedCredentials,
        isAuthorized: false,
      };

    default:
      return state;
  }
};

export default authReducer;
