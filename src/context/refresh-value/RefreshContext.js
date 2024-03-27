import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { socket } from "server";

export const RefreshContext = createContext(null);

const RefreshContextProvider = ({ children }) => {
    const [value,setValue] =useState("");
    const [ initialLoad,setInitialLoad ] = useState(true);

    useEffect(() => {
        socket.on('scoreUpdated', (data) => {
          console.log("Socket Listening!");
            const date = new Date();
            setInitialLoad(false);
            setValue(`${date}-${Math.random()*1000}`);
        });
      return () => socket.disconnect();
    }, []);

  return <RefreshContext.Provider value={{value,initialLoad}}  >{children}</RefreshContext.Provider>;
};

export default RefreshContextProvider;


export  const useRefreshValue =()=>{
    const value = useContext(RefreshContext);

    return { value:value.value,initialLoad:value.initialLoad }
}
