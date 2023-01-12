const initialState = {
  user:{
    id:"",
    name:"",
    email:"",
  }
};
const dataReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "addData":
      return {
        ...prevState,
        id:action.id,
        name:action.name,
        email:action.email
      };
    default:
      return initialState;
  }
};

export default dataReducer;
