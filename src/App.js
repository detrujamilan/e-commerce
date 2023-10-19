import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header/Header";
import DashBoard from "./components/Screens/DahsBoard/DashBoard";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
