// import React, { useState } from 'react';
// import '../../../App.css';
// import star from '../../../pictures/icons/icons8-star-26.png';
// import { useTranslation } from 'react-i18next';

// export function MarkImportant() {
//   const [isMarked, setIsMarked] = useState(false);
//   const { t } = useTranslation();

//   const handleMarkImportant = () => {
//     setIsMarked(!isMarked);
//   };

//   return (
//     <div className="MarkImportant">
//       <button
//         className={`details-btn ${isMarked ? 'marked' : ''}`}
//         onClick={handleMarkImportant}
//       >
//         <img className="menu-hidden-icon" src={star} alt="post" />
//         {t('modalMenuList.markImport')}
//       </button>
//     </div>
//   );
// }

import React, { useState } from 'react';
import StarButton from './StarButton';
import '../../../App.css';

export const MarkImportant = () => {
  const [isStarred, setIsStarred] = useState(false);

  const handleStarClick = () => {
    setIsStarred(!isStarred);
  };

  return (
    <div className="MarkImportant">
      <StarButton isStarred={isStarred} onClick={handleStarClick} />
    </div>
  );
};


