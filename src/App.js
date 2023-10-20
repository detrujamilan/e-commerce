import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header/Header";
import DashBoard from "./components/Screens/DahsBoard/DashBoard";
import Signup from "./components/Screens/SignUp/Signup";
import Login from "./components/Screens/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        {window.location.pathname !== "/" &&
          window.location.pathname !== "/signup" && <Header />}
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
