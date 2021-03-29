import React from 'react'
import * as styles from './index.styles'

export default function PopupForm(props) {
    return (
        <styles.Bound {...props}>
            <form>
                <input type='text' placeholder='Email' name='mail' />
                <input type='password' placeholder='Password' name='pass' />
                <input type='password' placeholder='Confirm password' name='c-pass' />
                <input type="submit" value="Signup"/>
            </form>
        </styles.Bound>
    )
}
