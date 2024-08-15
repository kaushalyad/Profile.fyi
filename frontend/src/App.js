import "./App.css";
import Router from "./router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    // Wrap the app with ToastContainer to display notifications
    <>
    
      <ToastContainer />
      <Router />

    </>
  );
}

export default App;
