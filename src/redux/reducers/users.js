const { ADD_USER,GET_USER } = require("../actions/types")

const initialState={
    users:[],
    loading:true
}
const userReducer=(state=initialState,action)=>{
const {payload,type}=action
switch (type){
    case GET_USER:
    return {
      users: [...payload],
      loading: false
      
    };
default:
    return state

}

}
export default userReducer