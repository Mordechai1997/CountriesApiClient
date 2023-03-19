import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CountryDetailsPage from "./components/CountryDetailsPage/CountryDetailsPage";
import CountrySearchPage from "./components/CountrySearchPage/CountrySearchPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<CountrySearchPage/>} />
          <Route path="/country" element={<CountryDetailsPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
