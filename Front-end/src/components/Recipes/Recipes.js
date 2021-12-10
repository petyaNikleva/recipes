import { useEffect, useState } from "react";
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from "../../context/AuthContext.js"

import RecipeCard from "./RecipeCard.js";
import * as recipesService from "../../services/recipesService.js";

function Recipes() {
    //TODO: Loader
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipesService.getAll()
            .then(result => {
                setRecipes(result);
            })
    }, []);

    const { user } = useContext(AuthContext);

    return (
        <>
            <div id="blog" className="blog-main pad-top-100 pad-bottom-100 parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 className="block-title text-center">
                                РЕЦЕПТИ
                            </h2>
                            {recipes.length > 0
                                ?
                                <div className="blog-box clearfix">
                                    {recipes.map(x => <RecipeCard key={x._id} recipe={x} />)}
                                    <div className="blog-btn-v">
                                        {user?._id
                                            ? <Link to="/create" className="hvr-underline-from-center">ДОБАВИ РЕЦЕПТА</Link>
                                            : null
                                        }
                                    </div>
                                </div>
                                :
                                <div className="blog-box clearfix banner-text">
                                    <h2>Няма добавени рецепти.</h2>

                                    <div className="blog-btn-v">
                                        {user?._id
                                            ? <Link to="/create" className="hvr-underline-from-center">ДОБАВИ РЕЦЕПТА</Link>
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