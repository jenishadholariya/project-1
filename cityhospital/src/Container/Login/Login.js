import React from 'react';

function Login(props) {
    return (
        <Form>
            <label>User name/Email
                <Input name="Email" placeholader="email" type="email"/>
            </label>
        </Form>
    );
}

export default Login;