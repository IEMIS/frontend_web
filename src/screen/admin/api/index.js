const BASE_URL = "https://iemis.herokuapp.com/api/v1/admin"
//const BASE_URL = "localhost:9000/api/v1";
//const BASE_URL = "http://localhost:9000/api/v1/admin" 



export const studentData = async (token)=>{
    try{
                                        // /admin/student/data/student"
        const response = await fetch(`${BASE_URL}/student/data/student`,{
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
        console.log(JSON.stringify({data}))
        return data;
    }catch(e){console.log(e)}
}


export const countStudentByClass = async (token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student/data/count/class`,{
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

export const countStudentByClassAllByDistrict= async (user,token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student/data/count/class/district`,{
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

export const schoolData = async (token)=>{
    try{
        const response = await fetch(`${BASE_URL}/school/data/school`,{
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



// export const countStudentByGender = async (token)=>{
//     try{
//         const response = await fetch(`${BASE_URL}/student/data/count/gender`,{
//             method:'GET',
//             headers:{
//                 'Content-Type':'application/json',
//                 accept:'application/json',
//                 Authorization: `Bearer ${token}`
//             },
//         }).catch(err => {
//             console.log(err)
//         });
//         const data = response.json();
//         return data;
//     }catch(e){console.log(e)}
// }

// export const countStudentByYear = async (token)=>{
//     try{
//         const response = await fetch(`${BASE_URL}/student/data/count/yearadmission`,{
//             method:'GET',
//             headers:{
//                 'Content-Type':'application/json',
//                 accept:'application/json',
//                 Authorization: `Bearer ${token}`
//             },
//         }).catch(err => {
//             console.log(err)
//         });
//         const data = response.json();
//         return data;
//     }catch(e){console.log(e)}
// }



// export const countStudentByProvidence  = async (token)=>{
//     try{
//         const response = await fetch(`${BASE_URL}/student/data/count/providence`,{
//             method:'GET',
//             headers:{
//                 'Content-Type':'application/json',
//                 accept:'application/json',
//                 Authorization: `Bearer ${token}`
//             },
//         }).catch(err => {
//             console.log(err)
//         });
//         const data = response.json();
//         return data;
//     }catch(e){console.log(e)}
// }

// export const countSchoolByDistrict = async (token)=>{
//     try{
//         const response = await fetch(`${BASE_URL}/school/data/count/district`,{
//             method:'GET',
//             headers:{
//                 'Content-Type':'application/json',
//                 accept:'application/json',
//                 Authorization: `Bearer ${token}`
//             },
//         }).catch(err => {
//             console.log(err)
//         });
//         const data = response.json();
//         return data;
//     }catch(e){console.log(e)}
// }

// export const countSchoolByEduLevel = async (token)=>{
//     try{
//         const response = await fetch(`${BASE_URL}/school/data/count/edulevel`,{
//             method:'GET',
//             headers:{
//                 'Content-Type':'application/json',
//                 accept:'application/json',
//                 Authorization: `Bearer ${token}`
//             },
//         }).catch(err => {
//             console.log(err)
//         });
//         const data = response.json();
//         return data;
//     }catch(e){console.log(e)}
// }

// export const countSchoolByOwnership = async (token)=>{
//     try{
//         const response = await fetch(`${BASE_URL}/school/data/count/ownership`,{
//             method:'GET',
//             headers:{
//                 'Content-Type':'application/json',
//                 accept:'application/json',
//                 Authorization: `Bearer ${token}`
//             },
//         }).catch(err => {
//             console.log(err)
//         });
//         const data = response.json();
//         return data;
//     }catch(e){console.log(e)}
// }

// export const countSchoolByType = async (token)=>{
//     try{
//         const response = await fetch(`${BASE_URL}/school/data/count/type`,{
//             method:'GET',
//             headers:{
//                 'Content-Type':'application/json',
//                 accept:'application/json',
//                 Authorization: `Bearer ${token}`
//             },
//         }).catch(err => {
//             console.log(err)
//         });
//         const data = response.json();
//         return data;
//     }catch(e){console.log(e)}
// }

// export const countSchoolByCat = async (token)=>{
//     try{
//         const response = await fetch(`${BASE_URL}/school/data/count/cat`,{
//             method:'GET',
//             headers:{
//                 'Content-Type':'application/json',
//                 accept:'application/json',
//                 Authorization: `Bearer ${token}`
//             },
//         }).catch(err => {
//             console.log(err)
//         });
//         const data = response.json();
//         return data;
//     }catch(e){console.log(e)}
// }

/**Teacher summary endpoint  */
export const countTeacherBySchoolAll = async (token)=>{
    try{
        const response = await fetch(`${BASE_URL}/teachers/data/count/school`,{
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

export const countTeacherBySchoolDis = async (user,token)=>{
    try{
        const response = await fetch(`${BASE_URL}/teachers/data/count/school/district`,{
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

export const teacherData = async (token)=>{
    try{                             
        const response = await fetch(`${BASE_URL}/teachers/data/count/teachers`,{
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
        console.log(JSON.stringify({data}))
        return data;
    }catch(e){console.log(e)}
}

export const studentperschoolrecords = async (user,token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student/data/count/class/school`,{
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
export const countTeacherBySchoolservice = async (user,token)=>{
    try{
        const response = await fetch(`${BASE_URL}/teachers/data/count/school/teachers`,{
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
export const countTeacherByClass = async (user,token)=>{
    try{
        const response = await fetch(`${BASE_URL}/teachers/data/count/school/school`,{
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

export const indicatorByDistrict = async (user, token)=>{
    try{
        const response = await fetch(`${BASE_URL}/student/data/indicators/district`,{
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