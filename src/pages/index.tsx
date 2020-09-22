import React from 'react';
import { Link } from 'react-router-dom'

function RootIndex() {
    return (
        <div>
            <h1>Welcome!</h1>
            <Link to="/about">About</Link>
        </div>
    )
}

export default RootIndex
