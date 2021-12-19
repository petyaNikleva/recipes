import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { useAuthContext } from "../../context/AuthContext.js"
import { useNotificationContext, types } from '../../context/NotificationContext.js';

import RecipeCard from "./RecipeCard.js";
import Button from "../Common/Button/Button.js";
import * as recipesService from "../../services/recipesService.js";
import './Recipes.css';

function Recipes() {
    //TODO: Loader
    const [recipes, setRecipes] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);

    const { addNotification } = useNotificationContext();

    useEffect(() => {
        recipesService.getAll()
            .then(result => {
                setRecipes(result);
                setAllRecipes(result);
            }).catch(err => {
                console.log(err)
                addNotification('Възникна грешка. Моля, опитайте по-късно!', types.danger);
            })
    }, []);

    const { user } = useAuthContext();

    const filterHandler = (e) => {
        let selectedType = e.target.textContent;
        selectedType === 'Всички'
            ? setRecipes(allRecipes)
            : setRecipes(allRecipes.filter(x => x.type === selectedType))
    }

    return (
        <>
            <div id="blog" className="blog-main pad-top-100 pad-bottom-100 parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 className="block-title text-center">
                                РЕЦЕПТИ
                            </h2>
                            <div className="block-title text-center text-custom">
                                <Button filterHandler={filterHandler} type="Всички" />
                                <Button filterHandler={filterHandler} type="Основни" />
                                <Button filterHandler={filterHandler} type="Супи" />
                                <Button filterHandler={filterHandler} type="Аламинути" />
                                <Button filterHandler={filterHandler} type="Десерти" />
                            </div>
                            {recipes.length > 0
                                ?
                                <div className="blog-box clearfix">
                                    {recipes.map(x => <RecipeCard key={x._id} recipe={x} />)}
                                    <div className="blog-btn-v">
                                        {user?._id
                                            ? <Link to="/recipes/create" className="hvr-underline-from-center">ДОБАВИ РЕЦЕПТА</Link>
                                            : null
                                        }
                                    </div>
                                </div>
                                :
                                <div className="blog-box clearfix banner-text">
                                    <h2 style={{color:"white"}}>Няма добавени рецепти.</h2>

                                    <div className="blog-btn-v">
                                        {user?._id
                                            ? <Link to="/recipes/create" className="hvr-underline-from-center">ДОБАВИ РЕЦЕПТА</Link>
                                            : null
                                        }
                                    </div>
                                </div>}


                        </div>
                    </div>
                </div>
            </div>
            :
        </>
    )
}
export default Recipes;