import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './context/AuthContext.js';
import { useState } from 'react';
import About from "./components/About.js";
import Banner from "./components/Banner.js";
import Recipes from "./components/Recipes/Recipes.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import MyRecipes from "./components/MyRecipres/MyRecipes.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Create from './components/Create.js';
import Logout from './components/Logout.js';
import Details from './components/Details/Details.js';
import Edit from './components/Edit/Edit.js';

const initialAuthState = {
  _id: '',
  username: '',
  token: '',
};


function App() {
  const [user, setUser] = useState(initialAuthState)

  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthState);
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
            <Route path="/recipes/my-recipes" element={<MyRecipes />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/recipes/create" element={<Create />} />
            <Route path="/recipes/edit/:recipeId" element={<Edit />} />
            <Route path="/recipes/details/:recipeId" element={<Details />} />

        </Routes>
      </main>
      <Footer />

    </div>
    </AuthContext.Provider>
  );
}

export default App;
