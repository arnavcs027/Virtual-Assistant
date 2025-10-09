import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const userDataContext=createContext()

const UserContext = ({children}) => {
    const serverUrl="https://virtualassistant-backend-pxar.onrender.com"
    const [userData,setUserData]=useState(null)
    const [loadingUser,setLoadingUser]=useState(true)
    const [frontendImage,setFrontendImage]=useState(null)
    const [backendImage,setBackendImage]=useState(null)
    const [selectedImage,setSelectedImage]=useState(null)

    const handleCurrentUser=async()=>{
        try {

            if (!document.cookie.includes("token")) {
                console.log("No token cookie found, skipping fetch.");
                setLoadingUser(false)
                return;
            }

            const result=await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
            setUserData(result.data)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingUser(false)
        }
    }

    const getGeminiResponse=async(command)=>{
        try {
            const result=await axios.post(`${serverUrl}/api/user/asktoassistant`,{command},{withCredentials:true})
            return result.data
        } catch (error) {
            console.log(error)           
        }
    }

    useEffect(()=>{
        handleCurrentUser()
    },[])

    const value={
        serverUrl,userData,setUserData,loadingUser,backendImage,setBackendImage,frontendImage,setFrontendImage,selectedImage,setSelectedImage,getGeminiResponse,
    }
  return (
    <userDataContext.Provider value={value}>
        {children}
    </userDataContext.Provider> 
  )
}

export default UserContext;
