import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    const navigate = useNavigate();

    const users = [{ username: "aditya@gmail.com", password: "password" }];

    const handleSubmit = (e) => {
        e.preventDefault();
        const account = users.find((user) => user.username === email);
        if (account && account.password === pass) {
            setauthenticated(true)
            localStorage.setItem("authenticated", true);
            navigate("/Home");
            console.log("first")
        }
        console.log(email);

    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}