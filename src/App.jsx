import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './AppWrite/auth'
import { login,logout } from './Store/AuthSlice'
import {Header,Footer} from "./components/index"
import './App.css'
import { Outlet } from 'react-router-dom'
import PulseLoader from "react-spinners/PulseLoader";


function App() {
  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
  .then((userData)=>{
    if(userData) dispatch(login({userData}));
    else dispatch(logout());
  })
    .finally(()=>setLoading(false))
  },[])

 

  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
         <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):(<div className='flex flex-col h-screen justify-center items-center  bg-background overflow-hidden'>
   <PulseLoader color='#7850de' size={15} />
  </div>)
}

export default App;
