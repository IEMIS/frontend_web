//let  BASE_URL = "",

const BASE_URL = "https://iemis.herokuapp.com/api/v1"

export const create = async (user)=>{
    try{
        const response = await fetch(`${BASE_URL}/admin/district`,{
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
        return data;
    }catch(e){console.log(e)}
}
export const reads = async (user)=>{
    try{
        const response = await fetch(`${BASE_URL}/admin/district`,{
            method:'GET',
            body:JSON.stringify(user),
            headers:{
                'Content-Type':'application/json',
                accept:'application/json'
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}

export const read = async (user)=>{
    try{
        const response = await fetch(`${BASE_URL}/admin/district/${user}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                accept:'application/json'
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}

export const edit = async (user)=>{
    try{
        const response = await fetch(`${BASE_URL}/admin/district/${user}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                accept:'application/json'
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}

export const remove = async (user)=>{
    try{
        const response = await fetch(`${BASE_URL}/admin/district/${user}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                accept:'application/json'
            },
        }).catch(err => {
            console.log(err)
        });
        const data = response.json();
        return data;
    }catch(e){console.log(e)}
}