
import '../../../App.css';
import { CreatedFolderItem } from './CreatedFolderItem' ;
import folders from '../../../pictures/icons/folder.png'


export function CreatedFoldersList () {
 
    const FoldersList = [
        {
            "id": 1,
            "icon": folders,
            "name": "Downloads",
            "count": "2 files, 14.05mb"
        },
        {
            "id": 2,
            "icon": folders,
            "name": "Personal Stuff",
            "count": "5 files, 126.5mb"
        },
        {
            "id": 3,
            "icon": folders,
            "name": "Work",
            "count": "6 files, 156.5mb"
        },
        {
            "id": 4,
            "icon": folders,
            "name": "Recordings",
            "count": "0 files,"
        },
        {
            "id": 5,
            "icon": folders,
            "name": "New Project",
            "count": "0 files,"
        },
    ]
    return (
        <div className="folder-items">
            {FoldersList.map((post, index) => (
                <CreatedFolderItem key={index} index={index} post={post} />
            ))}
        </div>
    )
}


