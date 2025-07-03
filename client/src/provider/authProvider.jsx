import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';
import Cookies from 'js-cookie';
import { VERIFY_URL, PROFILE_URL } from '../config/apiConfig';

const AuthContext = createContext();

// just (context).Provider wrapper
function AuthProvider({ children }) {
    const [ token, _setToken ] = useState(Cookies.get('token'));
    const [ isLogin, setIsLogin ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false)
    const [ userData, setUserData ] = useState(null);

    // Why create setToken instead of using _setToken ?
    // Bc. We have to set or remove token's cookie
    const setToken = (newToken) => {
        _setToken(newToken);
        if (newToken) {
            Cookies.set('token', newToken, { expires: 30 });
        } else {
            Cookies.remove('token');
        }
    };

    function logout() {
        setToken();
        setIsLogin(false);
        setUserData(null);
    }

    // check user login
    useEffect(() => {
      setIsLoading(true)
        if (token) {
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
                    }
                })
                .catch(() => setIsLogin(false))
        } else {
            setIsLogin(false);
        }
    setIsLoading(false)
    }, [token]);

    const contextValue =  useMemo(() => ({ token, setToken, isLogin, userData, logout, isLoading }), [token, userData]);

    return (
        <AuthContext.Provider value={contextValue}>{ children }</AuthContext.Provider>
    )
}

// custom state used to receiving authorization information in AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;
