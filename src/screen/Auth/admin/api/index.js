const BASE_URL = "",

const login = async (user)=>{
    try{
        const response = await fetch(`${BASE_URL}/}`,{
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

const forget = async (user) =>{
    try{
        const response = await fetch(`${BASE_URL}/`,{
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

const reset = async (user) =>{
    try{
        const response = await fetch(`${BASE_URL}/`,{
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