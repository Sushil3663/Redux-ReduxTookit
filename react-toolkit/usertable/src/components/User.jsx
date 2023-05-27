// import React from 'react'

// import DeleteUser from "./DeleteUser"
import '../App.css'
import { fakeUserData } from "../api";
import {useDispatch,useSelector} from 'react-redux';
import { addUser,removeUser,deleteUsers } from "./store/slice/UserSlice";
import {AiOutlineDelete} from 'react-icons/ai'


const User = () => {
    const dispatch = useDispatch();
    const result = useSelector((state)=>{
        return state.users
    })
    console.log(result)

    const addUsers =(data) =>{
        
        dispatch(addUser(data))

    }
    const deleteUser = (id) =>{
        (dispatch(removeUser(id)))
// 

    }

    const deleteAll = () => {
        dispatch(deleteUsers())
    }
  return (
    <>
        <div className="content" >
            <div className="admin-table" style={{padding:"2px"}}>
                <div className="admib-subtitle">
                    List Of User Details
                </div>
                <button onClick={()=>addUsers(fakeUserData())}>Add New User</button>
            </div>
            <hr />

            <ul>
            <hr />
                {
                    
                    result.map((element,index)=>{
                        
                        return <li key={index} style={{display:"flex", justifyContent:"space-between"}}>
                        {element}
                       
                        <button onClick={()=>deleteUser(index)}><AiOutlineDelete/></button>
                    

                        </li>
                        
                    })
                }
                
            </ul>
            <hr />
            <button onClick={()=>{deleteAll()}}> DeleteALLUser</button>
        </div>
    </>
  )
}

export default User