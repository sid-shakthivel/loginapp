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

export default function Login({ history }) {
    const [state, setState] = useState({ username: '', password: '' });

    function handleChange(e) {
        const { className, value } = e.target;
        setState((state) => ({
            ...state,
            [className.split(' ')[1]]: value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        let request = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                username: state.username,
                password: state.password,
            }),
        });

        request = await request.json();
        console.log(request);
        if (request.error) {
            toast.warn(`${request.error}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        } else if (request.url) {
            window.location.href = request.url;
        } else {
            history.push('/dashboard');
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
                                    id="login_username"
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
                                    id="login_password"
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
                                <Col s={12}>
                                    <Button
                                        waves="light"
                                        type="submit"
                                        large={true}
                                    >
                                        Login
                                    </Button>
                                </Col>
                            </Row>
                        </form>
                        <Link to="/signup">Sign Up</Link>
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
