export const storeToken =(token,id)=>{
    return (dispatch)=>{
        dispatch({
            type:"storeToken",
            token:token,
             id:id
        })
    }
}

export const removeToken = (token,id)=>{
    return (dispatch)=>{
        dispatch({
            type:"removeToken",
            token:token,
            id:id
        })
    }
}