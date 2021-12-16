const baseUrl = 'http://localhost:5000';

export const login = async (username, password) => {
    let res = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    let jsonResult = await res.json();
    

    if (res.ok) {
        return jsonResult;
    } else {
        //throw jsonResult.message;
        throw new Error('Error');
    }
};

export const register = ( username, email, password, repeatPassword ) => {
    return fetch(`${baseUrl}/auth/register`, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, email, password, repeatPassword })
    })
        .then(res => res.json());
}

export const logout = (token) => {
    return fetch(`${baseUrl}/auth/logout`, {
        headers: {
            'x-authorization': token
        }
    })
};