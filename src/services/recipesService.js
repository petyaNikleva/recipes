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

export const getOwn = async (userId) => {
    console.log(userId);
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
}

