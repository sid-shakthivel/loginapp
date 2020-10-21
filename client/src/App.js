import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';
import Dashboard from './Dashboard';
import './App.css';

export default function App() {
    return (
        <Router>
            <div>
                <Switch>\
                    <Route exact path="/" component={Login} />
                    <Route exact path="/signUp" component={SignUp} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route
                        exact
                        path="/callback"
                        render={(routeProps) => {
                            const url = `${window.location.href}`;

                            let firstIndex = url.indexOf('=') + 1;
                            const lastIndex = firstIndex + 22;

                            const code = url.substring(firstIndex, lastIndex);

                            const sub_url = url.substring(
                                lastIndex,
                                url.length
                            );

                            firstIndex = sub_url.indexOf('=') + 1;

                            const state = sub_url.substring(
                                firstIndex,
                                sub_url.length
                            );

                            fetch('http://localhost:5000/login/getToken', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                credentials: 'include',
                                body: JSON.stringify({
                                    code,
                                    state,
                                }),
                            }).then(() => {
                                console.log('here');
                                routeProps.history.push('/dashboard');
                                return;
                            });

                            return <h1>Callback</h1>;
                        }}
                    />
                </Switch>
            </div>
        </Router>
    );
}
