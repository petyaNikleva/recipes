import { useState, useEffect } from "react";

import * as recipesService from '../services/recipesService.js'

const useRecipeState = (recipeId) => {
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        recipesService.getOne(recipeId)
            .then(recipeResult => {
                setRecipe(recipeResult)
            })
    }, [recipeId]);

    return recipe

};

export default useRecipeState;
