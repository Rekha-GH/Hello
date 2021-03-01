import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const about = () => {
    return (
        <Layout>
            <h1>Gasty Cloud about</h1>
            <h2>Gatsby is a React-based open source framework with performance, scalability and security built-in. Collaborate, build and deploy 1000x faster with Gatsby Cloud. Get peak performance in 2021 working with the Gatsby Team: Learn about Concierge</h2>
            <p>Google link for more informations <Link to="/contact">Contact</Link></p>
        </Layout>
    )
}

export default about;
