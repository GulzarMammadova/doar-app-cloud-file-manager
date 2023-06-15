import '../../App.css';

export function ButtonsField(){
    return(
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

    )
} 
