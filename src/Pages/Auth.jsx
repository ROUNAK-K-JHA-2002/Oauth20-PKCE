import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function Auth(props) {

const navigate = useNavigate();

  const code_verifier = props.code_verifier;
  const clientid = import.meta.env.VITE_CLIENID
  const clientsecret = import.meta.env.VITE_CLIENTSECRECT
  const redirecturi = import.meta.env.VITE_REDIRECTURI

  const currentLocation = new URL(window.location.href);
  const AuthCodeFromLocation = currentLocation.searchParams.get("code");
     
  //Fetch Token URI
  const AuthUri = `http://tala.pinggy.io/oauth2/token?client_id=${clientid}&client_secret=${clientsecret}&grant_type=authorization_code&redirect_uri=${redirecturi}&code=${AuthCodeFromLocation}&code_verifier=${code_verifier}`
     
    //Making A Post request to get User Tokens
    axios.post(AuthUri).then((response)=>{
        console.log(response.data)
        sessionStorage.clear();
        sessionStorage.setItem("UserIDToken" , response.data.id_token)
        navigate('/home')
    }).catch((e)=>{
        console.log(e)
    })
 

  return (
    <div>AuthPAge</div>
  )
}

export default Auth