import {Link} from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const About = () => {
return (
<Layout pageTitle='About Me'>
    <p>This is About Page</p>
    <Link to='/home'>Home</Link>
</Layout>
);
};

export default About;
