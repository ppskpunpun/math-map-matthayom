import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';
import Cookies from 'js-cookie';
import { VERIFY_URL } from '../config/apiConfig';

const AuthContext = createContext();

// just (context).Provider wrapper
function AuthProvider({ children }) {
    const [token, _setToken] = useState(Cookies.get('token')); 
    const [isLogin, setIsLogin] = useState(false);

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

    // check user login
    useEffect(() => {
        if (token) {
            fetch(VERIFY_URL, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.valid) {
                        console.log(data)
                        setIsLogin(true);
                    }
                })
                .catch(() => setIsLogin(false))
        } else {
            setIsLogin(false);
        }
    }, [token]);

    const contextValue =  useMemo(() => ({ token, setToken, isLogin }), [token]);

    return (
        <AuthContext.Provider value={contextValue}>{ children }</AuthContext.Provider>
    )
}

// custom state used to receiving authorization information in AuthContext 
export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;