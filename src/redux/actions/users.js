import { ADD_USER,GET_USER,DELETE_USER,UPDATE_USER } from "./types";
import { addUser,getUser,deleteUser,updateUser } from "../../services/api";


// addUser
export const addUsers=(firstName,lastName,birthPlace,birthYear,image)=>
async dispatch =>{
    try{
        const res=await addUser(firstName,lastName,birthPlace,birthYear,image)
        dispatch({
            type:ADD_USER,
            payload:res.data
        })
        console.log("add user")
    }
    catch(error){
        console.log(error)
    }
}

// GetUser
export const getUsers = () => async (dispatch) => {
    try {
     const res=await getUser()
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    } catch (error) {
      console.log(error);
    }
  };