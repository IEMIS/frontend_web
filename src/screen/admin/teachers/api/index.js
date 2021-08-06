//let  BASE_URL = "",

//const BASE_URL = "https://iemis.herokuapp.com/api/v1/admin"
const BASE_URL = "http://localhost:9000/api/v1/admin" 

export const create = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/teachers`,{
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
export const reads = async (token)=>{
    try{
        const response = await fetch(`${BASE_URL}/teachers`,{
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

export const read = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/teachers/${user}`,{
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

export const edit = async (id, user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/teachers/${id}`,{
            method:'PUT',
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

export const remove = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/teachers/${user}`,{
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