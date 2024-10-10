import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../fairbase/fairbase.config";

export const AuthContext= createContext(null);
const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null);

    const [loading,setLoading]=useState(null);  //private rout loading ar jonna

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;