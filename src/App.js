import { useEffect } from "react";
import RouteComponent from "./routes";
import { useLocation } from "react-router";

  


function App() {
  const location = useLocation()

  // scroll to top everytime url changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [location.pathname])
  return (
    <>
      <RouteComponent/>
    </>
  );
}

export default App;
