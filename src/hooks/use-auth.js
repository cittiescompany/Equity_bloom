import { useContext,createContext,useEffect,useState } from "react";
import {useGetProfile} from '@/api/auth.js';
import {useMount} from 'react-use';
import {getCookie,setCookie,clearCookie} from '@/lib/utils';

const AuthContext = createContext({
    user:null,
    updateUser:()=>{},
    authenticate:()=>{},
    reloadUser:()=>{},
    resolved:false,
    authenticated:false,
    logOut:()=>{},
    error:null,
});

export const AuthProvider = ({children}) => {
    const auth =useAuthProvider();
    return(<AuthContext.Provider value={auth}>{children}</AuthContext.Provider>);
}
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth=()=>{
    return useContext(AuthContext);
}

export const useAuthProvider = () => {
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [resolved, setResolved] = useState(false);
    const {data,refetch,error,isRefetching}=useGetProfile();
    useEffect(()=>{
        if(!!data){
            const {user}=data.data;
            authenticate({user});
        }

    },  [data]);
 
    const authenticate=({user,token})=>{
        setUser(user);
        setAuthenticated(true);
        setResolved(true);
        if(token){
            setCookie('loginToken',token);
        }
    }

    const updateUser=(user)=>{
        setUser((old)=>({...old,...user}));
    }
    const logOut=()=>{
        clearCookie('loginToken');
        window.location.href = '/login';
    }
    const reloadUser=async()=>{
        console.log('reloading')
        await refetch();
    }
    useMount(()=>{
        const token = getCookie('loginToken');
        if(!token)return setResolved(true);
        if(!resolved && !authenticated)return reloadUser();
    })
    return {
        user,
        updateUser,
        reloadUser,
        authenticate,
        resolved,
        isReloading: isRefetching,
        authenticated,
        logOut,
        error,
    };  
}