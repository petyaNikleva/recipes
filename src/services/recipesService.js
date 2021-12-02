const baseUrl = 'http://localhost:5000';

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

// for create TO DO x-authorization: tokenValue in headrs
export const create = async (recipeData) => {
    let response = await fetch(`${baseUrl}/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'applicationa/json',
            //'x-authorization': token
        },
        body: JSON.stringify(recipeData)
    })
    let recipe = await response.json();
    return recipe;
}