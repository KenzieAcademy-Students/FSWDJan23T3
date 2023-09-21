import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Dashboard, SigninPage, SignupPage } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </>
  );
}

export default App;
