import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appWrite/auth'
import { login,logout } from './Store/AuthSlice'
import conf from './conf/conf'
import {Header,Footer} from "./components/index"
import './App.css'

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
          wdfghj
        </main>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App
