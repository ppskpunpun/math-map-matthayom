import {
    createContext,
    useContext,
    useMemo,
    useState
} from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

// just (context).Provider wrapper
function AuthProvider({ children }) {
    const [token, _setToken] = useState(Cookies.get('token')); 

    // Why create setToken instead of using _setToken ?
    // Bc. We have to set or remove token's cookie
    const setToken = (newToken) => {
        _setToken(newToken);
        if (newToken) {
            Cookies.set('token', newToken);
        } else {
            Cookies.remove('token');
        }
    };

    const contextValue =  useMemo(() => ({ token, setToken }), [token]);

    return (
        <AuthContext.Provider value={contextValue}>{ children }</AuthContext.Provider>
    )
}

// custom state used to receiving authorization information in AuthContext 
export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;