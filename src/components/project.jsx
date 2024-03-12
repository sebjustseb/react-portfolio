import React from 'react';

const Project = ({ title, description, deployedLink, githubLink }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={deployedLink}>Deployed on GitHub Pages</a>
      <a href={githubLink}>GitHub Repository</a>
    </div>
  );
}

export default Project;
