import axios from "axios"

const Api= axios.create({baseURL:"http://localhost:4000/api/"});

// ADD USER
function addUser(firstName,lastName,birthPlace,birthYear,image){
    return Api.post("users/addUser",{firstName,lastName,birthPlace,birthYear,image})
}
// GET USER
function getUser(){
    return Api.get("users/getUser")
}
// UPDATE USER
function updateUser(id){
    return Api.put(`users/updateUser${id}`)
}
// DELETE USER
function deleteUser(id){
    return Api.delete(`users/deleteUser${id}`)
}
export {addUser,getUser,deleteUser,updateUser}
export default {addUser,getUser,deleteUser,updateUser}