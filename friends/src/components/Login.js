import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const Login = (props) => {

    const [state, setState] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })

    const login = event => {
        event.preventDefault();

        //make a POST request and send creentials object to the api
        axiosWithAuth()
        .post('/api/login', state.credentials)
        .then(response => {
            console.log(response)
            window.localStorage.setItem('token', response.data.payload)
            props.history.push('./friends-list');
        })
        .catch(error => {
            console.log("Error making POST request to API", error);
        })
    }

    const handleChanges = event => {
        setState({
            credentials: {
                ...state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className="Login">
            <h1>Login</h1>

            <form onSubmit={login}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={state.credentials.username}
                    onChange={handleChanges}
                />
                <label htmlFor="password">Password:</label>
                   <input
                    type="password"
                    name="password"
                    value={state.credentials.password}
                    onChange={handleChanges}
                />
                <button>Log in</button>
            
            </form>
        </div>
    );
}

export default Login