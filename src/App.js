import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header/Header";
import DashBoard from "./components/Screens/DahsBoard/DashBoard";
import Signup from "./components/Screens/SignUp/Signup";
import Login from "./components/Screens/Login/Login";
import PageNotFound from "./common/NotFound/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        {window.location.pathname !== "/" &&
          window.location.pathname !== "/signup" &&
          window.location.pathname !== "*" && <Header />}
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
