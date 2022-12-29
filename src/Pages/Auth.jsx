import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Auth(props) {
const navigate = useNavigate();
const code_verifier = props.code_verifier;
  const state = props.state
  const code_challenge =props.code_challenge
const clientid = import.meta.env.VITE_CLIENID
   console.log("authstate" + state)
 const clientsecret = import.meta.env.VITE_CLIENTSECRECT
 const redirecturi = import.meta.env.VITE_REDIRECTURI

    const currentLocation = new URL(window.location.href);
     const stateFromLocation = currentLocation.searchParams.get("state");
     const AuthCodeFromLocation = currentLocation.searchParams.get("code");
     
     const AuthUri = `http://tala.pinggy.io/oauth2/token?client_id=${clientid}&client_secret=${clientsecret}&grant_type=authorization_code&redirect_uri=${redirecturi}&code=${AuthCodeFromLocation}&code_verifier=${code_verifier}`
     
   
    axios.post(AuthUri).then((response)=>{
        console.log(response.data)
         
         localStorage.setItem("UserIDToken" , response.data.id_token)
         navigate('/')

    }).catch((e)=>{
        console.log(e)
    })
     
    
    
     
    //  axios.post()

  return (
    <div>AuthPAge</div>
  )
}

export default Auth