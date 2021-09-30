//const BASE_URL = "https://iemis.herokuapp.com/api/v1/district";

const BASE_URL = "http://localhost:9000/api/v1/district" 


//Dashboard 
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
// /district/student/data/class/school/:school
export const countStudentByClassInSchool = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student/data/class/school/${user}`,{
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
        // /district/school/data/student/:district
        const response = await fetch(`${BASE_URL}/school/data/${user}`,{
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
// district/teacher/data/school/class/:district&:school
export const countTeacherInSchool = async (district,school, token)=>{
    try{                   
        const response = await fetch(`${BASE_URL}/teacher/data/school/class/${district}&${school}`,{
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



//school dashboard
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

export const studentDataBySchool = async (user, token)=>{
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


//Student Indicator 
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