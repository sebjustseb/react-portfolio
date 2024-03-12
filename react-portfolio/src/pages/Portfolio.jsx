import React from 'react';
import Project from '../components/project';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        <Project
          title="Project 1"
          description="Description of Project 1"
          deployedLink="https://example.com/project1"
          githubLink="https://github.com/example/project1"
        />
        <Project
          title="Project 2"
          description="Description of Project 2"
          deployedLink="https://example.com/project2"
          githubLink="https://github.com/example/project2"
        />
      </div>
    </div>
  );
}

export default Portfolio;
