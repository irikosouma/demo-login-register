import React from 'react'
import * as styles from './index.styles'

export default function PopupForm(props) {
    let { className, onClickRegister } = props
    return (
        <styles.Bound className={className}>
            <form>
                <input type='text' placeholder='Email' name='mail' />
                <input type='password' placeholder='Password' name='pass' />
                <p className='text-blue'>Forget password?</p>
                <input type="submit" value="Login"/>
                <p className='p-remember'>Not a menber? <span className='text-blue' onClick={()=>onClickRegister()}>Signup now</span></p>
            </form>
        </styles.Bound>
    )
}
