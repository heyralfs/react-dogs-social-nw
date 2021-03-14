import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import { UserStorage } from "./contexts/UserContext";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import Photo from "./components/Photo";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="dogs-app" element={<Home />} />
              <Route path="dogs-app/login/*" element={<Login />} />
              <ProtectedRoute path="dogs-app/conta/*" element={<User />} />
              <Route path="dogs-app/photo/:id" element={<Photo />} />
              <Route path="dogs-app/perfil/:user" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
