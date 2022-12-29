import React, {useEffect} from 'react'
import {Button} from 'react-bootstrap'



function Login(props) {
 
  const state = props.state
  const code_challenge =props.code_challenge



 const clientid = import.meta.env.VITE_CLIENID
 const redirecturi = import.meta.env.VITE_REDIRECTURI

 //GENERATING AUTH URI
 const uri = `http://tala.pinggy.io/oauth2/authorize?response_type=code&client_id=${clientid}&redirect_uri=${redirecturi}&scope=openid&code_challenge=${code_challenge}&code_challenge_method=S256&state=${state}`

     const handleLogin =  async()=>{
     window.location.href = uri;
    }
   
  return (
   <>
    <div>LoginPAge</div>
     <Button variant='primary' onClick={handleLogin}> Login</Button>
    </>
  )
}

export default Login

