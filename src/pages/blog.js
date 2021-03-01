import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const blog = () => {
    return (
        <Layout>
        <h1>Gastsby Blog</h1>
        <h3>Gatsby sites are fully functional React apps so you can create high-quality, dynamic web apps, from blogs to e-commerce sites to user dashboards. Use a Modern Stack for Every Site. No matter where the data comes from, Gatsby sites are built using React and GraphQL.</h3>
        <p>Please visit <Link to="/about">about from blog</Link></p>
        </Layout>
        )
}

export default blog;
