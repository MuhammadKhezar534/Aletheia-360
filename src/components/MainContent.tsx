import React from "react";

interface ContentItem {
  title: string;
  description: string;
  video?: string;
}

const MainContent: React.FC<{ sections: ContentItem[] }> = ({ sections }) => (
  <div className="main-content">
    {sections.map((section, index) => (
      <div key={index} className="content-section">
        <h2>{section.title}</h2>
        <p>{section.description}</p>
        {section.video && <video src={section.video} controls />}
      </div>
    ))}
  </div>
);

export default MainContent;
