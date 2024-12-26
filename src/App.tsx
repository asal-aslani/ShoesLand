
import { Route, Routes } from "react-router";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";


function App() {
 

  return (
    <Routes>
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/sign-up" element={<SignupPage/>} />
</Routes>
  );
}
 
export default App
