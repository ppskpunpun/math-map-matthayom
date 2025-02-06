import { BrowserRouter, Routes, Route } from 'react-router';
import AuthProvider from './provider/authProvider';
import MathMap from './components/MathMap'

export default function App() {
  return (
    <AuthProvider>    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MathMap className='h-screen' /> } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}