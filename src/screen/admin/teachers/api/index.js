//let  BASE_URL = "",

const BASE_URL = "https://iemis.herokuapp.com/api/v1"

export const create = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/schools`,{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json',
                accept:'application/json', 
                Authorization: `Bearer ${token}`
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}
export const reads = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/schools`,{
            method:'GET',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json',
                accept:'application/json', 
                Authorization: `Bearer ${token}`
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}

export const read = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/schools/${user}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                accept:'application/json',
                Authorization: `Bearer ${token}`
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}

export const edit = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/schools/${user}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                accept:'application/json',
                Authorization: `Bearer ${token}`
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}

export const remove = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/schools/${user}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                accept:'application/json',
                Authorization: `Bearer ${token}`
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}
//get subject
export const readsSubject = async (token)=>{
    try{
        //subject
        const response = await fetch(`${BASE_URL}/subject`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                accept:'application/json',
                Authorization: `Bearer ${token}`
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}

//get school
export const readsSchool = async (token)=>{
    try{
        //school
        const response = await fetch(`${BASE_URL}/school`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                accept:'application/json',
                Authorization: `Bearer ${token}`
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}















