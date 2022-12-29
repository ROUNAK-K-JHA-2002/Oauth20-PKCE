import React, {useEffect} from 'react'
import {Button} from 'react-bootstrap'



function Login(props) {
 
 //Secret Variables
 const code_verifier = props.code_verifier;
  const state = props.state
  const code_challenge =props.code_challenge
     console.log("loginstate" + state)



 const clientid = import.meta.env.VITE_CLIENID
 const redirecturi = import.meta.env.VITE_REDIRECTURI
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



//  const handleLogin = async() =>{
//           const auth0 = new Auth0Client({
//           domain: 'dev-me617yu8fp0hr5jw.us.auth0.com',
//           clientId: 'qyYZoEEjO5YH1wVR2sY0Ttarkj2IFFeJ'
//         });
//         await auth0.loginWithRedirect({
//             authorizationParams : {
//                 redirect_uri : 'http://localhost:3000/'
//             }
//         }).then((token)=>{
//             auth0.getUser().then((user)=>{
//                 console.log(user)
//                 localStorage.setItem('user',user)
//             }).catch((e)=>{
//             console.log(e)
//         })
//         }).catch((e)=>{
//             console.log(e)
//         })
//       }