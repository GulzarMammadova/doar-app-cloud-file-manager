import "../App.css";
import React from 'react';

export default function ToggleDark(props) {
  return (
    <div className="wrapper">
      <label className="switch">
        <input
          type="checkbox"
          id="checkbox-toggle"
          placeholder="darkmode"
          title="darkmode"
          className="input"
          onChange={() => {
            props.toggleDark();
          }}
        />
        <span className="slider"></span>
        <span className="wave"></span>
      </label>
    </div>
  );
}