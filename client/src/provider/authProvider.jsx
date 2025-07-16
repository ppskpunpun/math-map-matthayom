import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import Cookies from 'js-cookie';
import { VERIFY_URL, PROFILE_URL, LOGOUT_URL } from '../config/apiConfig';

const AuthContext = createContext();

// just (context).Provider wrapper
function AuthProvider({ children }) {
  const [ isLogin, setIsLogin ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isAdmin, setIsAdmin ] = useState(false)
  const [ userData, setUserData ] = useState(null);
  const [ token, _setToken ] = useState(localStorage.getItem('token'))

  const setToken = (newToken) => {
    if (newToken == null) {
      localStorage.removeItem('token')
    } else {
      localStorage.setItem('token', newToken)
      _setToken(newToken)
    }
  }

  function logout() {
    setToken(null)
    setUserData(null)
    setIsLogin(false)
  }

  // check user login
  useEffect(() => {
    if (!token) return

    setIsLoading(true)
    fetch(PROFILE_URL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIsLogin(true);
          setUserData(data);
          if (data.name == 'admin') {
            setIsAdmin(true)
          }
        } else {
          setIsLogin(false);
        }
      })
      .catch(() => setIsLogin(false))
      .finally(() => setIsLoading(false))
  }, [token]);

  const contextValue =  useMemo(() => ({ isLogin, userData, logout, isLoading, setToken, token, isAdmin }), [userData]);

  return (
    <AuthContext.Provider value={contextValue}>{ children }</AuthContext.Provider>
  )
}

// custom state used to receiving authorization information in AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
}

export default AuthProvider;
