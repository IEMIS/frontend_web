const BASE_URL = "https://iemis.herokuapp.com/api/v1/district";

//const BASE_URL = "http://localhost:9000/api/v1/district" 



export const studentData = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student/data/student/${user}`,{
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

export const countStudentByClass = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student/data/class/${user}`,{
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

export const schoolData = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student/data/school/${user}`,{
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

export const studentDataBySchool = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student/data/student/school`,{
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


export const studentDataByDistrict = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student/data/student/district`,{
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

export const districtL = async (token)=>{
    try{
        const response = await fetch(`${BASE_URL}/district`,{
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





export const schoolDetails = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/school/${user}`,{
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

export const schoolDataByDistrict = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/school/data/school/district`,{
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

export const schoolByDistrict = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/school/data/district`,{
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


/**Teacher summary endpoint  */
export const countTeacherBySchool = async (user, token)=>{
    try{                   
        const response = await fetch(`${BASE_URL}/teacher/data/school/${user}`,{
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


export const studentIndicator = async (token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student/data/indicators`,{
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