import { baseUrl } from "./constants.js";

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/recipes`)
    let allRecipes = await response.json()
    return allRecipes;
}

export const getOne = async (recipeId) => {
    let response = await fetch(`${baseUrl}/recipes/${recipeId}`)
    let recipe = await response.json();
    return recipe;
}

export const getOwn = async (userId) => {
    let response = await fetch(`${baseUrl}/recipes?ownerId=${userId}`);
    let ownRecipes = await response.json();
    return ownRecipes;    
}

export const create = async (recipeData, token) => {
    let response = await fetch(`${baseUrl}/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token,
        },
        body: JSON.stringify({ ...recipeData })
    });

    let recipe = await response.json();
    return recipe;
};

export const update = async (recipeId, recipeData, token) => {
    let response = await fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify({...recipeData})
    });

    let updatedRecipe = await response.json();
    return updatedRecipe;
}

export const deleteRecipe = (recipeId, token) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'x-authorization': token
        }
    }).then(res => res.json());
} 

export const like = (recipeId, recipe, token) => {
    return fetch(`${baseUrl}/recipes/${recipeId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(recipe)
    }).then(res => res.json());
};