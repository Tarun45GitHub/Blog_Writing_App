import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../Store/AuthSlice'

function LogoutBtn() {
    const dispatch= useDispatch()
    const logoutHandler=()=>{
        authService.logoutAccount()
        .then(()=>{
            dispatch(logout())
        })
        .catch()
    }
    return (
       <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-xl'
       onClick={logoutHandler} >Logout</button>
    )
}

export default LogoutBtn
