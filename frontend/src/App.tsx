import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import KYC from "./pages/KYC"
import EmailFlow from "./pages/EmailFlow"
import { useAuth } from "./context/AuthContext";
function App() {
  const auth = useAuth();
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {auth?.isLoggedIn && auth.user && (
          <Route path="/kyc" element={<KYC />} />
        )}
        <Route path="/emailflow" element={<EmailFlow />} />
      </Routes>
    </main >
  )
}

export default App
