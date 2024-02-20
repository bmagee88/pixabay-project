import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      
      </Routes>
  );
}

export default App;
