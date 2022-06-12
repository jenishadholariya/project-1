import React from 'react';

function Login(props) {
    return (
        <form>
            <label>User name/Email</label>
            <input name="Email" placeholader="email" type="email" />
            <label>Password</label>
            <input name="Password" placeholader="Password" type="Password" />
        </form>

    );
}
export default Login;