import {useEffect, useState} from 'react';
import * as authServices from '../services/auth.services';

function LoginPage({onLogin}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(event){
        event.preventDefault();
        
        authServices.login(email, password)
            .then(({user, token}) => {
                onLogin(user, token);
            })
            .catch((error) => {
                alert('Login incorrecto');
            });

    }

    function onChangeEmail(event){
        setEmail(event.target.value);
    }

    function onChangePassword(event){
        setPassword(event.target.value);
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" onChange={onChangeEmail} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" onChange={onChangePassword} value={password} />
                <br />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;