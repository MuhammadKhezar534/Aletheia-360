import React from "react";

interface TestimonyProps {
  name: string;
  description: string;
  videoLink: string;
}

const TestimonyCard: React.FC<TestimonyProps> = ({ name, description, videoLink }) => (
  <div className="testimony-card">
    <video src={videoLink} controls />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default TestimonyCard;
