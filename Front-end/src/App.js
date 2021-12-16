import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext.js';
import { NotificationProvider } from './context/NotificationContext.js';
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
import Page404 from './components/Page404/Page404.js';
import PrivateRoute from './components/Common/PrivateRoute.js';
import PublicRoute from './components/Common/PublicRoute.js';
import Notification from './components/Common/Notification/Notification.js'

function App() {

    return (
        <AuthProvider>
            <NotificationProvider>
                <div className="App">
                    <Header />

                    <Notification />

                    <main id="main-content">
                        <Routes>
                            <Route path="/test" element={<Notification />} />
                            <Route path="/" element={<Banner />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/recipes" element={<Recipes />} />
                            <Route path="/logout" element={<Logout />} />
                            <Route element={<PublicRoute />}>
                                <Route path="/register" element={<Register />} />
                                <Route path="/login" element={<Login />} />
                            </Route>
                            <Route element={<PrivateRoute />}>
                                <Route path="/recipes/create" element={<Create />} />
                                <Route path="/recipes/edit/:recipeId" element={<Edit />} />
                                <Route path="/recipes/my-recipes" element={<MyRecipes />} />
                            </Route>
                            <Route path="/recipes/details/:recipeId" element={<Details />} />
                            <Route path='*' element={<Page404 />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </NotificationProvider>
        </AuthProvider>
    );
}

export default App;
