import React, { useState } from 'react'
import * as styles from './index.styles'

//component
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function PopupForm() {
    // login | signup
    const [formSelected, setFormSelected] = useState('')

    return (
        <styles.Bound>
            <div className='title'>
                <p className={`p-title ${
                                    formSelected === 'login' ? 'login-show' 
                                    : 
                                    formSelected === 'signup' && 'login-hide'}`}>
                    Login Form
                </p>
                <p className={`p-title ${
                                    formSelected === 'login' ? 'register-hide' 
                                    : 
                                    formSelected === 'signup' && 'register-show'}`}>
                    Signup Form
                </p>
            </div>
            <div className='toggle'>
                <div className='toggle-bar'>
                    <div className={`div-toggle ${formSelected === 'login' || formSelected === '' ? 'active' : ''}`}
                        onClick={() => setFormSelected('login')}>
                        <p>Login</p>
                    </div>
                    <div className={`div-toggle ${formSelected === 'signup' ? 'active' : ''}`}
                        onClick={() => setFormSelected('signup')}>
                        <p>Signup</p>
                    </div>
                </div>
                <div className={`slider ${
                                    formSelected === 'login' ? 'move-left' 
                                    : 
                                    formSelected === 'signup' && 'move-right'}`}/>
            </div>
            <div className='form-container'>
                <LoginForm className={
                                    formSelected === 'login' ? 'login-show' 
                                    : 
                                    formSelected === 'signup' && 'login-hide'}
                    onClickRegister={() => 
                                        formSelected === 'signup' ? setFormSelected('login')
                                        : setFormSelected('signup')}/>
                <RegisterForm className={
                                    formSelected === 'login' ? 'register-hide' 
                                    : 
                                    formSelected === 'signup' && 'register-show'} />
            </div>
        </styles.Bound>
    )
}
