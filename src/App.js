import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./screens/DahsBoard/DashBoard";
import Signup from "./screens/SignUp/Signup";
import Login from "./screens/Login/Login";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
        {window.location.pathname !== "/" &&
          window.location.pathname !== "/signup" && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
