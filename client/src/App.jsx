import { BrowserRouter, Routes, Route } from 'react-router';
import AuthProvider from './provider/authProvider';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Layout from './pages/Layout';
import Roadmap from './pages/Roadmap';
import Home from './pages/Home'

export default function App() {
  return (
    <AuthProvider>    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path='signup' element={ <SignUp /> } />
            <Route path='contents' element={ <Home /> } />
            <Route path='practice' element={ <Home /> } />
            <Route path='leaderboard' element={ <Home /> } />
            <Route path='about' element={ <Home /> } />
          </Route>
          <Route path='login' element={ <Login /> } />
          <Route path='/roadmap' element={ <Roadmap /> } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}