import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'materialize-css';
import {
    Row,
    Col,
    CardPanel,
    TextInput,
    Button,
    Icon,
} from 'react-materialize';

export default function Signup() {
    const [state, setState] = useState({
        username: '',
        password: '',
        email: '',
        verifyPassword: '',
    });

    function handleChange(e) {
        const { className, value } = e.target;
        setState((state) => ({
            ...state,
            [className.split(' ')[1]]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (state.password !== state.verifyPassword) {
            toast.warn('Password must equal verified password', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
            return;
        }

        let request = await fetch('http://miraclloginapp.ml/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
		'Accept': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                username: state.username,
                password: state.password,
                email: state.email,
            }),
        });

        request = await request.json();
	console.log(request);
	
        if (request.error.username.message) {
            toast.warn(`${request.error.username.message}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }

        if (request.error.password.message) {
            toast.warn(`${request.error.password.message}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }

        if (request.error.email.message) {
            toast.warn(`${request.error.email.message}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }

        if (request.url) {
            window.location.href = request.url;
        }
    }

    return (
        <div
            className="App valign-wrapper"
            style={{ backgroundColor: '#4ECDC4', height: '100vh' }}
        >
            <Row style={{ width: '55%' }}>
                <Col s={12}>
                    <CardPanel>
                        <form onSubmit={handleSubmit}>
                            <Row></Row>
                            <Row>
                                <TextInput
                                    id="signup_username"
                                    icon={
                                        <div
                                            style={{ verticalAlign: 'middle' }}
                                        >
                                            <Icon>account_circle</Icon>
                                        </div>
                                    }
                                    label="Username"
                                    inputClassName="username"
                                    validate={true}
                                    type="text"
                                    s={12}
                                    onChange={handleChange}
                                ></TextInput>
                            </Row>
                            <Row>
                                <TextInput
                                    id="signup_email"
                                    icon={
                                        <div
                                            style={{ verticalAlign: 'middle' }}
                                        >
                                            <Icon>email</Icon>
                                        </div>
                                    }
                                    label="Email"
                                    inputClassName="email"
                                    validate={true}
                                    type="email"
                                    email={true}
                                    s={12}
                                    onChange={handleChange}
                                ></TextInput>
                            </Row>
                            <Row>
                                <TextInput
                                    id="signup_password"
                                    icon={
                                        <div
                                            style={{ verticalAlign: 'middle' }}
                                        >
                                            <Icon>lock_outline</Icon>
                                        </div>
                                    }
                                    label="Password"
                                    inputClassName="password"
                                    validate={true}
                                    type="password"
                                    password={true}
                                    s={12}
                                    onChange={handleChange}
                                ></TextInput>
                            </Row>
                            <Row>
                                <TextInput
                                    id="signup_verify_password"
                                    icon={
                                        <div
                                            style={{ verticalAlign: 'middle' }}
                                        >
                                            <Icon>lock_outline</Icon>
                                        </div>
                                    }
                                    label="Verify Password"
                                    inputClassName="verifyPassword"
                                    validate={true}
                                    type="password"
                                    password={true}
                                    s={12}
                                    onChange={handleChange}
                                ></TextInput>
                            </Row>
                            <Row>
                                <Col s={12}>
                                    <Button
                                        waves="light"
                                        type="submit"
                                        large={true}
                                    >
                                        Sign Up
                                    </Button>
                                </Col>
                            </Row>
                        </form>
                        <Link to="/">Login</Link>
                    </CardPanel>
                </Col>
            </Row>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
            />
        </div>
    );
}
