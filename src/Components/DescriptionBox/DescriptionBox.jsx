import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box description-nav">Description</div>
        <div className="additional-info">
          <p className="information-text">Additional Information</p>
          </div>
      <div className="descriptionbox-nav-box fade">Reviews (0)</div>
      </div>
      <div className="rounded-container">
        <div className="descriptionbox-description">
          <p className="purple-underlined-text">
            This book is a part of readable series, which helps the child to pick that is suitable for his reading level, by which he can practice and practice and improve
            his reading abilities. The child will start reading independently and ascending consequently depending on his own reading level and potentials.
          </p>
          <p>
            The series contians nemerous attractive stories that are full of suspense and human values. It is considered one of the most important series among all readable series in the Arab world, since it is Arabic oriented and not translated.
          </p>
        </div>
        </div>
        </div>


  );
}

export default DescriptionBox;
