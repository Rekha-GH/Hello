import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const index = () => {
  return (
    <Layout>
    <h1>Hello</h1>
    <h2>“Gatsby is a free and open-source framework based on React that helps developers build blazing-fast websites and apps.” According to the Gatsby team. React is a library meant to provide a particular set of core functionality for developers to leverage. It is intended to be lightweight and broadly applicable.</h2>
    <p>Need a Developer? then click the link <Link to="/contact">New Developer</Link></p>
    </Layout>
     )
}

export default index;
