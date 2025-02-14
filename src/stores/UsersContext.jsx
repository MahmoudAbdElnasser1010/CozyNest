import { createContext, useEffect, useState } from "react";

export let UsersContext = createContext();

export default function UsersContextProvider({children}){

    const[userToken, setUserToken] = useState(null);
    useEffect(() => {
        if(localStorage.getItem('token')){
            setUserToken(localStorage.getItem('token'));
        }
    }, []);
  


    return <UsersContext.Provider value={{userToken, setUserToken}}>
        {children}
    </UsersContext.Provider>
}