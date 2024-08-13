import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({children,authentication=true}) {
    const navigate=useNavigate()
    const [loading,setLoading]=useState(true);
    const authStatus= useSelector(state=>state.auth.status)

    useEffect(()=>{
        if(authentication && auth!==authentication){
            navigate("/login")
        }else if(!authentication && auth !==authentication){
            navigate("/")
        }
        setLoading(false)
    },[authStatus,navigate,authentication])


    return (
        <div></div>
    )
}

export default AuthLayout
