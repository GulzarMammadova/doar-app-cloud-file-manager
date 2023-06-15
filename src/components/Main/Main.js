import '../../App.css';
import { RecentlyAccessed } from './RecentlyAccessed/RecentlyAccessed'
import { Files } from './AllFiles/Files'
import { Folders } from "./Folders/Folders"

export function Main() {
  return (
    <div className="main-container">
      <h1>All Files</h1>
      <div className="recently">
        <div className="menu-title"><span>recently accessed files</span></div>
        <RecentlyAccessed />
      </div>
      <Folders />
      <div className="files">
        <div className="menu-title"><span>files</span></div>
        <Files />
      </div>
    </div>
  );
}
