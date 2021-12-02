import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './context/AuthContext.js';
import { useState } from 'react';
import About from "./components/About.js";
import Banner from "./components/Banner.js";
import Recipes from "./components/Recipes/Recipes.js";
import Footer from "./components/Footer.js";
import Gallery from "./components/Gallery.js";
import Header from "./components/Header.js";
import OurMenu from "./components/OurMenu.js";
import Register from "./components/Register.js";
import TodaysSpecials from "./components/TodaysSpecials.js";
import Login from "./components/Login.js";
import Create from './components/Create.js';

const initialAuthState = {
  _id: '',
  email: '',
  accessToken: '',
};


function App() {
  const [user, setUser] = useState(initialAuthState)

  const login = (authData) => {
    setUser(authData);
  }

  const logout = (authData) => {
    setUser(authData);
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
    <div className="App">
      <Header />

      <main id="main-content">
        <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/todays-specials" element={<TodaysSpecials />} />
            <Route path="/menu" element={<OurMenu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
        </Routes>
      </main>
      <Footer />

    </div>
    </AuthContext.Provider>
  );
}

export default App;
