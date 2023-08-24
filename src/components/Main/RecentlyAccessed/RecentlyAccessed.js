import React, { useState } from 'react';

export function RecentlyAccessed({ allFilesList }) {
  const [recentlyDatas, setRecentlyDatas] = useState([]);

  const handleClick = (id) => {
    if (recentlyDatas.length >= 3) {
      setRecentlyDatas([...recentlyDatas.slice(1), id]);
    } else {
      setRecentlyDatas([...recentlyDatas, id]);
    }
  };

  return (
    <div className="recently">
      <div className="menu-title"></div>
      {recentlyDatas.map((id) => {
        const file = allFilesList.find((x) => x.id === id);
        return (
          <div key={file.id} className="recent-file" onClick={() => handleClick(file.id)}>
            <img src={file.icon} alt={file.name} className="file-icon" />
            <span>{file.name}</span>
          </div>
        );
      })}
    </div>
  );
}
