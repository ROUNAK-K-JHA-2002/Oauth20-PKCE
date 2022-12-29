import React from 'react'
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {Buffer} from 'buffer';


function HomePage() {


// const navigate = useNavigate();

  // const handleLogout =() =>{
  //   localStorage.removeItem("UserIDToken")
  //   navigate("/home")
  // }
  //Fetching And Decoding  User Details 


  const userToken =  sessionStorage.getItem("UserIDToken")
     const userInfoEncoded = userToken.split('.')
     const userInfoDecoded = Buffer.from(userInfoEncoded[1],'base64').toString()
     const userEmail = JSON.parse(userInfoDecoded).sub
     console.log(userEmail)
  return (
    <>
    <div >Welcome , {userEmail}</div>
     {/* <Button variant='primary' onClick={handleLogout}> LogOut</Button> */}
    </>
  )
}

export default HomePage