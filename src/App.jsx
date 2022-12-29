import './App.css'
import {Routes , Route , Navigate} from 'react-router-dom'
import Home from './Pages/HomePage'
import Login from './Pages/Login'
import Auth from './Pages/Auth'
function App() {
  //Retrieving PKCE Code and state.
  const pkce_code = generate_pkce_code();
  const code_verifier = pkce_code.code_verifier
  const state =  pkce_code.state
  const code_challenge = pkce_code.code_challenge

   
  return (
    <Routes>
    
      <Route exact path='/home' element={ <Home /> } />
      <Route  path='/' element={ <Login state={state} code_challenge={code_challenge} code_verifier={code_verifier}/>}/>
      <Route  path='/auth/tala/callback' element={<Auth state={state} code_challenge={code_challenge} code_verifier={code_verifier} />}/>
    </Routes>
  )
}

export default App




function generate_pkce_code() {

    //Function to create Random elements
   function randomString(length) {
     var result           = '';
     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     var charactersLength = characters.length;
     for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
     return result;
 }


 const code_verifier = "mycustomchallengeverifier";
 const state =  randomString(20)


//  const code_challenge = code_verifier;
    function generateCodeChallenge(code_verifier) {
      return  base64URL(CryptoJS.SHA256(code_verifier))
    }
    function base64URL(string) {
      return string.toString(CryptoJS.enc.Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
    }
    const code_challenge = generateCodeChallenge(code_verifier)
    console.log(code_challenge)
    const pkce_code = {
     'code_verifier' : code_verifier,
    'code_challenge' : code_challenge,
     'state' : state
    }
  return pkce_code;
  
}


