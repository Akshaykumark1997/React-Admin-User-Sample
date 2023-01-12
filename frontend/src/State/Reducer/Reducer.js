const initialState = {
  token: "",
  id: "",
};

const tokenReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "StoreToken":
      return {
        ...prevState,
        token: action.token,
        id: action.id,
      };
    case "RemoveToken":
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