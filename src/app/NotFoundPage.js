import React from 'react';
import Link from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h1>404. This page does not exist.</h1>
        <Link to="/">Go back to home</Link>
    </div>
);

export default NotFoundPage;