import React , {useEffect }from 'react'
 import {useSelector,useDispatch} from "react-redux"
 import { getUsers } from '../../redux/actions/users'
const Users=()=> {
     const users = useSelector(state => state.userReducer.users)
     const dispatch =useDispatch()
   console.log("users",users)
useEffect(()=>{
    dispatch(getUsers())
}, [dispatch])
       return (
        <div>
            
        </div>
    )
}
export default  Users