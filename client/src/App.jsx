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
import Profile from './pages/Profile';

import IntegerNumber from './pages/contents/number-system/IntegerNumber';
import Sets from './pages/contents/number-system/Set'
import Logic from './pages/contents/number-system/Logic'
import RealNumber from './pages/contents/number-system/RealNumber';
import RelationAndFunction from './pages/contents/number-system/RelationAndFunction';
import ExponentialAndLogarithm from './pages/contents/number-system/ExponentialAndLogarithm';
import Trigonometry from './pages/contents/number-system/Trigonometry';
import Matrix from './pages/contents/number-system/Matrix';
import Vector from './pages/contents/number-system/Vector';
import ComplexNumber from './pages/contents/number-system/ComplexNumber';
import CountingAndProbability from './pages/contents/statistic/CountingAndProbability';

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
            <Route path='contents/number-system/logic' element={ <Logic /> } />
            <Route path='/contents/number-system/real-number' element={ <RealNumber /> } />
            <Route path='/contents/number-system/realtion-and-function' element={ <RelationAndFunction /> } />
            <Route path='/contents/number-system/exponential-and-logarithm' element={ <ExponentialAndLogarithm /> } />
            <Route path='/contents/number-system/trigonometry' element={ <Trigonometry /> } />
            <Route path='/contents/number-system/matrix' element={ <Matrix /> } />
            <Route path='/contents/number-system/vector' element={ <Vector /> } />
            <Route path='/contents/number-system/complex-number' element={ <ComplexNumber /> } />
            <Route path='/contents/statistic/counting' element={ <CountingAndProbability /> } />
            <Route path='practice' element={ <Practice /> } />
            <Route path='practice/:username/:title' element={ <DoPracticeQuestion /> } />
            <Route path='create-practice-question' element={ <CreatePracticeQuestion /> } />
            <Route path='leaderboard' element={ <Leaderboard /> } />
            <Route path='about' element={ <About /> } />
            <Route path='profile' element={ <Profile /> } />
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
