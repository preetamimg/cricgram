import { useEffect } from "react";
import RouteComponent from "./routes";
import { useLocation } from "react-router";
import io, { connect } from 'socket.io-client';
import { BASE_URL } from "./constants";


const socket = io("http://159.89.164.11:3334");
// export const socket = connect("http://159.89.164.11:3334");
  


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [location.pathname]);


  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
      
      socket.on('scoreUpdated', (data) => {
        console.log('Received data:', data);
      });

    });
  

  
  
    return () => socket.disconnect();
  }, []);

  return (
    <>
      <RouteComponent/>
    </>
  );
}

export default App;
