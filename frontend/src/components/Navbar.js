import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/view-posts">View Posts</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
