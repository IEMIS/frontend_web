

import React from 'react'
import { Redirect } from 'react-router'
import { signout } from './api'
import Swal from 'sweetalert2'

export default function SignOut() {

    const [redirect, setRedirect] = React.useState(false)

    const bootstrap = async () =>{
        signout(()=>{
            setRedirect(true)
        })

        let Toast = Swal.mixin({
            toast: true,
            timerProgressBar: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        });

        Toast.fire({
            animation: true,
            type: 'success',
            title: 'Signout is successfully'
        })
    }

    React.useEffect(() => {
        //effect
        bootstrap()
        return () => {
            bootstrap()
        }
    })

    const handleRedirect = ()=>{
        if(redirect){
            return <Redirect to="/auth/district/signin" />
        }
    }

    return (
        <div>
            {handleRedirect()}
        </div>
    )
}
