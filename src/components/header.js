import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { Link } from 'gatsby';

const header = () => {
  return (
    <header>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">blog</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default header;
