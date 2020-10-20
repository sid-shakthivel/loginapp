import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import 'materialize-css';
import { Row, Col, CardPanel } from 'react-materialize';

export default function Dashboard() {
    const [component, changeComponent] = useState({
        component: <h1>Verifying</h1>,
    });

    useEffect(() => {
        fetch('http://localhost:5000/dashboard', {
            method: 'GET',
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    changeComponent({ component: <Redirect to="/" /> });
                    return;
                }
                changeComponent({ component: <h1>Hi {res.username}</h1> });
            });
    }, []);

    return (
        <div
            className="App valign-wrapper"
            style={{ backgroundColor: '#4ECDC4', height: '100vh' }}
        >
            <Row style={{ width: '55%' }}>
                <Col s={12}>
                    <CardPanel>{component.component}</CardPanel>
                </Col>
            </Row>
        </div>
    );
}
