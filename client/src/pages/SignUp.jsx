import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useAuth } from "../provider/authProvider";
import { SIGNUP_URL } from '../config/apiConfig';
import MMM from '../assets/MMM2.svg'
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Link } from 'react-router'
import { toThai } from '../utils';
import { useNavigate } from 'react-router';

export default function SignUp() {
  const [ name, setName ] = useState('');
  const [ birthday, setBirthday ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ errorMsg, setErrorMsg ] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    fetch(SIGNUP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, name, birthday }),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          auth.setToken(data.token)
          navigate('/');
        } else {
          setErrorMsg(data.message);
        }
      })
      .catch((err) => {
        setErrorMsg('Internal server error');
      });
  }

  return (
    <div className='grid place-items-center h-screen bg-primary-500'>
      <div className='flex flex-col bg-gray-50 p-10 shadow-2xl rounded-xl gap-5 w-[40%] max-w-[425px] min-w-[350px] items-center'>
        <Link to='/'>
          <img className='w-30' src={MMM} />
        </Link>
        <h1 className='text-center text-3xl text-slate-700'>สร้างบัญชีผู้ใช้</h1>
        {errorMsg != '' && <div className='bg-red-100 w-full p-2 text-red-800 border-1 border-red-800 rounded-sm text-center'>{ toThai(errorMsg) }</div>}
        <form className='flex flex-col gap-5 w-full' onSubmit={handleSignUp}>
          <InputField placeholder='name' onChange={ (e) => setName(e.target.value) } />
          <div className='flex items-stretch'>
            <span className='text-slate-500 bg-gray-300 flex items-center px-4'>birthday</span>
            <InputField className='grow' type='date' onChange={ (e) => setBirthday(e.target.value) } />
          </div>
          <InputField placeholder='username' onChange={ (e) => setUsername(e.target.value) } />
          <InputField placeholder='password' type='password' onChange={ (e) => setPassword(e.target.value) } />
          <Button className='w-full' variant='regular_primary' type='submit'>Sign up</Button>
        </form>
        <Link className='text-sm text-center underline text-slate-500 hover:text-secondary-500 trasnition-all duration-75' to='/login'>มีบัญชีอยู่แล้ว</Link>
      </div>
    </div>
  )
}
