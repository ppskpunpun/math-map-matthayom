import { BrowserRouter, HashRouter, Routes, Route } from 'react-router';
import AuthProvider from './provider/authProvider';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Layout from './pages/Layout';
import Roadmap from './pages/Roadmap';
import Home from './pages/Home'
import Contents from './pages/Contents';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Practice from './pages/Practice'
import CreatePracticeQuestion from './pages/CreatePracticeQuestion';
import DoPracticeQuestion from './pages/DoPracticeQuestion';
import Leaderboard from './pages/Leaderboard';

import IntegerNumber from './pages/contents/number-system/IntegerNumber';
import Sets from './pages/contents/number-system/Set'

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path='contents' element={ <Contents /> } />
            <Route path='contents/number-system/integer-number' element={ <IntegerNumber /> } />
            <Route path='contents/number-system/sets' element={ <Sets /> } />
            <Route path='practice' element={ <Practice /> } />
            <Route path='practice/:username/:title' element={ <DoPracticeQuestion /> } />
            <Route path='create-practice-question' element={ <CreatePracticeQuestion /> } />
            <Route path='leaderboard' element={ <Leaderboard /> } />
            <Route path='about' element={ <About /> } />
            <Route path='*' element={ <NotFound /> }/>
          </Route>
          <Route path='signup' element={ <SignUp /> } />
          <Route path='login' element={ <Login /> } />
          <Route path='roadmap' element={ <Roadmap /> } />
        </Routes>
      </HashRouter>
    </AuthProvider>
  )
}
