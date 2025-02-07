import { BrowserRouter, Routes, Route } from 'react-router';
import AuthProvider from './provider/authProvider';
import Login from './pages/Login';
import SignUp from './pages/SighUp';
import MathMap from './components/MathMap'

export default function App() {
  return (
    <AuthProvider>    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MathMap className='h-screen' /> } />
          <Route path='/signup' element={ <SignUp /> } />
          <Route path='/login' element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}