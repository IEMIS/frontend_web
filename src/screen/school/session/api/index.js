//let  BASE_URL = "",

const BASE_URL = "https://iemis.herokuapp.com/api/v1/admin"
//const BASE_URL = "http://localhost:9000/api/v1/admin" //http://localhost:9000/api/v1/admin/admin

export const create = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/session`,{
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
        const response = await fetch(`${BASE_URL}/session`,{
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
        const response = await fetch(`${BASE_URL}/session/${user}`,{
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
        const response = await fetch(`${BASE_URL}/session/${id}`,{
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
        const response = await fetch(`${BASE_URL}/session/${user}`,{
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








