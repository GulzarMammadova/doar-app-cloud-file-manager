import '../../../App.css';
import React from 'react';

export function RecentlyAccessedList({ lastOpenedUrl }) {
  return (
    <div className="RecentlyAccessedList-container">
      {lastOpenedUrl ? (
        <a href={lastOpenedUrl} target="_blank" rel="noopener noreferrer">
          {lastOpenedUrl}
        </a>
      ) : (
        <p>No files accessed recently.</p>
      )}
    </div>
  );
}