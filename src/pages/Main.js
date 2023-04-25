import "../App.css";

export function Main() {
  return (
    <div className="main-container">
<h1>All Files</h1>
<div className="recently">
<div className="menu-title"><span>recently accessed files</span></div>

</div>
<div className="folders">
<div className="menu-title"><span>folders</span></div>
<div className="folder-items">
<div className="folder">
<i class="fa-regular fa-folder fa-2xl"></i>
<div className="description">
<p className="folder-title">Downloads</p>
<p className="folder-capacity">2 files, 14.05mb</p>
</div>
</div>
<div className="folder">
<i class="fa-regular fa-folder fa-2xl"></i>
<div className="description">
<p className="folder-title">Personal Stuff</p>
<p className="folder-capacity">8 files, 73.06mb</p>
</div>
</div>
<div className="folder">
<i class="fa-regular fa-folder fa-2xl"></i>
<div className="description">
<p className="folder-title">Personal Stuff</p>
<p className="folder-capacity">5 files, 126.5mb</p>
</div>
</div>
<div className="folder">
<i class="fa-regular fa-folder fa-2xl"></i>
<div className="description">
<p className="folder-title">Recordings</p>
<p className="folder-capacity">0 files</p>
</div>
</div>
<div className="folder">
<i class="fa-regular fa-folder fa-2xl"></i>
<div className="description">
<p className="folder-title">New Project</p>
<p className="folder-capacity">0 files</p>
</div>
</div>
</div>

</div>
<div className="files">
<div className="menu-title"><span>files</span></div>

</div>
    </div>
  );
}
