import React from 'react';
import { Link } from 'gatsby';

const home = () => {
  return (
    <div>
      <title>Home Page</title>
      <h1>Home</h1>
      <Link to="/about">About</Link>
    </div>
  );
};

export default home;
