import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Customize from './pages/Customize'
import { userDataContext } from './context/UserContext'
import Home from './pages/Home'
import Customize2 from './pages/Customize2'

const App = () => {
  const {userData,setUserData,loadingUser}=useContext(userDataContext)

  if (loadingUser) {
    return (
      <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',background:'linear-gradient(to top, black, #02023d)'}}>
        <h1 style={{color:'white',fontSize:'24px',fontWeight:'600'}}>Loading...</h1>
      </div>
    )
  }

  return (
    <Routes>
      <Route path='/' element={(userData?.assistantImage && userData.assistantName)? <Home/> : <Navigate to={"/customize"}/>}/>
      <Route path='/signup' element={!userData?<SignUp/>:<Navigate to={"/"}/>}/>
      <Route path='/signin' element={!userData?<SignIn/>:<Navigate to={"/"}/>}/>
      <Route path='/customize' element={userData?<Customize/>:<Navigate to={"/signup"}/>}/>
      <Route path='/customize2' element={userData?<Customize2/>:<Navigate to={"/signup"}/>}/>
    </Routes>
  )
}

export default App
