import React from 'react';
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>About!</h1>
            <div>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default About
