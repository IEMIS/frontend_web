//let  BASE_URL = "",

const BASE_URL = "https://iemis.herokuapp.com/api/v1/district"

// /district/auth/signin
export const signin = user => {
    return fetch(`${BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};


export const login = async (user)=>{
    try{
        const response = await fetch(`${BASE_URL}/auth/signin`,{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json',
                accept:'application/json'
            },
        }).catch(err => {
            console.log("request fail")
            console.log(err)
        });
        const data = response.json();
        console.log(data)
        return data;
    }catch(e){console.log(e)}
}

export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('district-Auth', JSON.stringify(data));
        next();
    }
};

export const signout = next => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('district-Auth');
        next();
        /*
        return fetch(`${BASE_URL}/signout`, {
            method: 'GET'
        })
            .then(response => {
                console.log('signout', response);
            })
            .catch(err => console.log(err));
            */
    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('district-Auth')) {
        return JSON.parse(localStorage.getItem('district-Auth'));
    } else {
        return false;
    }
};


export const forget = async (user) =>{
    try{
        const response = await fetch(`${BASE_URL}/auth/forgetPassword`,{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json; charset=UTF-8',
                accept:'application/json'
            },
        }).catch(err => console.log(err));
        const data = response.json();
        return data;
    }catch(e){console.log(e)}

}

export const reset = async (user) =>{
    try{
        const response = await fetch(`${BASE_URL}/auth/resetPassword`,{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json; charset=UTF-8',
                accept:'application/json'
            },
        }).catch(err => console.log(err));
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}