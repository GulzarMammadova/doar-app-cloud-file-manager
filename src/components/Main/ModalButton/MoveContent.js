import React from "react";
import '../../../App.css';
import {FoldersList} from '../Folders/FoldersList'

export default function MoveContent(props) {
  const { show, closeModal } = props;

  return (
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <button className="close-btn" onClick={closeModal}>X</button>
        <h1>Move to</h1>
<div className="MoveFolder-list">
<FoldersList/>
</div>
        <div className="submit">
        <input className="submit-btn" type="submit" value="Submit" />
        </div>
      </div>
    </>
  );
}

