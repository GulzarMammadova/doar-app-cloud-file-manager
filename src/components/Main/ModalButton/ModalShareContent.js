import React from "react";
import '../../../App.css';

export default function ModalShareContent(props) {
  const { show, closeModal } = props;

  return (
    <>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <h1>Share With Others</h1>
        <div className="share-email">
          <form>
            <p>Other users:</p>
            <input type="text" name="name" 
            placeholder="Enter names ar email addresses" />
          </form>
          <div className="rights">
            <p>Rights:</p>
            <select>
              <option value="read">Viewer</option>
              <option value="comment">Commenter</option>
              <option value="edit">Editor</option>
            </select>
          </div>
        </div>
        <div className="share-social">
          <p>More:</p>
          <a className="link" href="https://twitter.com/"><i className="fa-brands fa-twitter fa-lg"></i></a>
          <a className="link" href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f fa-lg"></i></a>
        </div>
        <div className="submit">
          <div><input className="submit-btn" type="submit" value="Share" />
          </div>
          <div><button className='submit-btn' type="submit" onClick={closeModal}>Close</button></div>
        </div>

      </div>
    </>
  );
}