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
  const [ userData, setUserData ] = useState(null);

  function logout() {
    if ( !isLogin ) {
      return
    }

    setIsLogin(false);
    setUserData(null);

    fetch(LOGOUT_URL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log('Logout successfully')
        } else {
          console.log('Could not Logout')
        }
      })
  }

  // check user login
  useEffect(() => {
    setIsLoading(true)
    fetch(PROFILE_URL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIsLogin(true);
          setUserData(data);
        } else {
          setIsLogin(false);
        }
      })
      .catch(() => setIsLogin(false))
    setIsLoading(false)
  }, []);

  const contextValue =  useMemo(() => ({ isLogin, userData, logout, isLoading }), [userData]);

  return (
    <AuthContext.Provider value={contextValue}>{ children }</AuthContext.Provider>
  )
}

// custom state used to receiving authorization information in AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
}

export default AuthProvider;
