import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useAuth } from "../provider/authProvider";
import { LOGIN_URL } from '../config/apiConfig';

export default function Login() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const auth = useAuth();

  function handleLogin(e) {
    e.preventDefault();
     
    fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.success) {
          auth.setToken(Cookies.get('token'));
          alert(data.message);
        }
      })
  }

  return (
    <form onSubmit={handleLogin}>
      <input type="text" placeholder="Username" onChange={ (e) => setUsername(e.target.value) }/>
      <input type="password"  placeholder="Password" onChange={ (e) => setPassword(e.target.value) } />
      <input className="bg-blue-500 p-1 hover:cursor-pointer hover:bg-blue-300" type="submit" value="Login" />
    </form>
  )
}