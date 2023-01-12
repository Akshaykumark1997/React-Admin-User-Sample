const initialState = {
  token: "",
  id: "",
};

const tokenReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "storeToken":
      return {
        ...prevState,
        token: action.token,
        id: action.id,
      };
    case "removeToken":
      return {
        ...prevState,
        token: "",
        id: "",
      };
    default:
      return initialState;

  }
};

export default tokenReducer;