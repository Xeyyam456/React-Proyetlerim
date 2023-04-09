import './loginstyle.css';
import React from 'react'

const login = () => {
    return (
        <div className='container'> 

            <form className='login'>
                <div className='username'>
                <label>Username</label>
                <input type="text" />
                </div>
                <div className='password'>
                <label>Password</label>
                <input type="password" />
                </div>
                <button>Sign In</button>
                <p>
                    Create a new account
                </p>
            </form>

        </div>
    )
}

export default login;