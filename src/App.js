import balao from './assets/balao.png';
import googleButton from './assets/ButtonGoogle.png';
import gitButton from './assets/ButtonGitHub.png';
import { useState } from 'react';
import './App.css';


function App() {

  const [ username, setUsername ] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://api.sheetmonkey.io/form/e7rvPYsVHbApxvF2cytSpm' , {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Nome: username, Email: email, Senha: password})
    })

  }

  return (
   <div id='container'>
      <img src={balao}></img>
      <div className='container-login'>
        <h1 className='tituloLogin'>Create yout Free Account</h1>
        <div className='formularioLogin'>
              <form onSubmit={handleSubmit}>
                <div id='input-form'>
                  <label for=''>Full Name</label>
                  <input type='text' id='fullname' onChange={(e) => setUsername(e.target.value)} placeholder='Enter you Full Name here'></input>
                </div>
                <div id='input-form'>
                  <label for=''>Email</label>
                  <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter you Email here'></input>
                </div>
                <div id='input-form'>
                  <label for=''>Password</label>
                  <input type='password' id='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter you Password here'></input>
                </div>

              <button id='buttonBumit' type='submit'>Create Account</button>
              <span id='loginText'>Already have a account?<a href='#'>Log In</a></span>
              </form>
        </div>
        <div className='optionsLogin'>
          <h1>- OR -</h1>
          <div className='buttons-container-login'>
            <a href='#'><img src={googleButton}></img></a>
            <a href='#'><img src={gitButton}></img></a>
          </div>
          <span>Reserver directs to Luis Eduardo</span>
        </div>
      </div>
   </div>
  );
}

export default App;
