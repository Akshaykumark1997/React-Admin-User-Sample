export const storeToken =(data)=>{
    return (dispatch)=>{
        dispatch({
            type:"storeToken",
            token:data.token,
             id:data.id
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