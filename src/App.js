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
        {<Header />}
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {<Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
