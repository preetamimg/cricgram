import { useEffect } from "react";
import RouteComponent from "./routes";
import { useLocation } from "react-router";
import RefreshContextProvider from "context/refresh-value/RefreshContext";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [location.pathname]);

  return (
    <RefreshContextProvider>
      <RouteComponent/>
    </RefreshContextProvider>
  );
}

export default App;
