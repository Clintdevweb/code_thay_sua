import React, { useState, useRef } from 'react'

export default function DemoUseRef(props) {

    let [userLogin, setUserLogin] = useState({userName:''});
    let inputUserName = useRef(null)
    let inputPassword = useRef(null)

    let userName = useRef('')

    const handleLogin = () => {
        // console.log('inputUserName', inputUserName.current.value);
        // console.log('inputPassword', inputPassword.current.value);

        console.log('useName', userName.current);
        console.log('userLogin', userLogin.userName);

        userName = 'abc'
        setUserLogin({
            userName:userName.current
        })

    }

    return (
        <div className='container'>
            <h3>Login</h3>
            <div className='form-group'>
                <h3>UserName</h3>
                <input ref={inputUserName} type="text" name='UserName' className='form-control' />
            </div>

            <div className='form-group'>
                <h3>Password</h3>
                <input ref={inputPassword} type="text" name='Password' className='form-control' />
            </div>

            <div className='form-group'>
                <button className='btn btn-success' onClick={() => {
                    handleLogin()
                }}>Login</button>
            </div>
        </div>
    )
}
