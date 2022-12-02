import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function AboutCustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{backgroundColor: match ? '#9333ea' : 'white',border: match ? '2px solid #9333ea' : '2px solid #9333ea' , color: match ? 'white': '#9333ea', }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
};

export default AboutCustomLink;