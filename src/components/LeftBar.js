import "../App.css";
import { Link } from "react-router-dom";

export function LeftBar() {
  return (
    <div className="left-container">
      <div className="left-bar-create-btns">
        <div className="new-btn-dropdown">
          <button type="button" aria-label="DropdownToggle" className="new-btn">NEW</button>
          {/* <div className="dropdown-menu">
            <span>Folder</span>
            <span>Notes</span>
            <div>
              <span>Word Document</span>
              <span>Powerpoint</span>
              <span>Excel Spreadsheet</span>
            </div>
          </div> */}
        </div>
        <div className="upload-btn-dropdown">
          <button
            type="button"
            aria-label="DropdownToggle"
            className="upload-btn"
          >UPLOAD</button>
        </div>
      </div>
      <div className="scroll-bar">
      <div className="my-drive">
      <div className="menu-title"><span>MY DRIVE</span></div>
      <ul>
            <li><Link to="/"><i class="fa-regular fa-file"></i> All Files</Link></li>
            <li><Link to="/"><i class="fa-solid fa-desktop"></i> My Devices</Link></li>
            <li><Link to="/"><i class="fa-regular fa-clock"></i> Recents</Link></li>
            <li><Link to="/"><i class="fa-regular fa-star"></i> Important</Link></li>
            <li><Link to="/"><i class="fa-regular fa-trash-can"></i> Delete Files</Link></li>
          </ul>
      </div>
      <div className="file-lib">
      <div className="menu-title"><span>FILE LIBRARY</span></div>
      <ul>
            <li><Link to="/"><i class="fa-regular fa-file"></i> Documents</Link></li>
            <li><Link to="/"><i class="fa-regular fa-file-image"></i> Images</Link></li>
            <li><Link to="/"><i class="fa-regular fa-file-video"></i> Videos</Link></li>
            <li><Link to="/"><i class="fa-regular fa-file-audio"></i> Audio</Link></li>
            <li><Link to="/"><i class="fa-regular fa-file-zipper"></i> Zip Files</Link></li>
          </ul>
      </div>
      <div className="storage">
      <div className="menu-title"><span>STORAGE STATUS</span></div>
      <div className="storage-status">
      <i class="fa-solid fa-database fa-2xl"></i>
      <p className="used">10.2GB used of 50GB</p>
      <progress className="progress" id="file" value="32" max="100"> 20,4% </progress>
      </div>
      <div className="offer"> <p className="offer-text">
      Get 2TB (2,000GB) of storage now
      and get 40% off. Offers ends soon. </p>
      <a href="/"> Learn more</a></div>

      </div>
      </div>
    </div>
  );
}
