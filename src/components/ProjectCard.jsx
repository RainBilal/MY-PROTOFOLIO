import React from 'react';

const ProjectCard = ({ title, desc, tags, index, imageUrl }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`row-project-item ${isEven ? 'row-normal' : 'row-reverse'}`}>
      <div className="row-project-visual">
        
        {}
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Visual Proyek ${title}`} 
            className="project-image" 
          />
        ) : (
          <div className="visual-placeholder">
            <span>{title.substring(0, 3).toUpperCase()}</span>
          </div>
        )}

        {/* Overlay bawaan CSS kamu yang akan muncul saat di-hover */}
        <div className="visual-overlay">
          <span className="overlay-text">Lihat Detail Proyek</span>
        </div>
      </div>
      
      <div className="row-project-details">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="project-tags-list">
          {tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;