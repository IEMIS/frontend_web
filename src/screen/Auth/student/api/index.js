//let  BASE_URL = "",

const BASE_URL = "https://iemis.herokuapp.com/api/v1"

export const signin = user => {
    return fetch(`${BASE_URL}/students/signin`, {
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
        const response = await fetch(`${BASE_URL}/students/signin`,{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json',
                accept:'application/json'
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        console.log(data)
        return data;
    }catch(e){console.log(e)}
}

export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('students-Auth', JSON.stringify(data));
        next();
    }
};

export const signout = next => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('students-Auth');
        next();
    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('students-Auth')) {
        return JSON.parse(localStorage.getItem('students-Auth'));
    } else {
        return false;
    }
};


export const forget = async (user) =>{
    try{
        const response = await fetch(`${BASE_URL}/students/forgetPassword`,{
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
        const response = await fetch(`${BASE_URL}/students/resetPassword`,{
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