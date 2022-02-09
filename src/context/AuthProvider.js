import  { createContext} from 'react';
import useDark from '../hooks/useDark';


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const allContext = useDark();
    return (
        <AuthContext.Provider value={allContext}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;