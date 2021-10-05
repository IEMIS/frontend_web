
const BASE_URL = "https://iemis.herokuapp.com/api/v1/schools"

//const BASE_URL = "http://localhost:9000/api/v1/schools" 

export const create = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student`,{
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

export const reads = async (user,token)=>{
    try{
        const response = await fetch(`${BASE_URL}/students/${user}`,{
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
        const response = await fetch(`${BASE_URL}/student/${user}`,{
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
        const response = await fetch(`${BASE_URL}/student/${id}`,{
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
        const response = await fetch(`${BASE_URL}/student/${user}`,{
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
        //console.log({data})
        return data;
    }catch(e){console.log(e)}
}

//read schools in the district
export const readsSchool = async (user, token)=>{
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

export const readsClass = async (token)=>{
    try{
        const response = await fetch(`${BASE_URL}/class`,{
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

export const readsSession = async (token)=>{
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
//get parent
export const readsParent = async (token)=>{
    try{
        //parent
        const response = await fetch(`${BASE_URL}/parent`,{
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














