
import '../../../App.css';
import { CreatedFolderItem } from './CreatedFolderItem' ;
import folders from '../../../pictures/icons/folder.png'
import React from 'react';
import { Link } from 'react-router-dom';

export function CreatedFoldersList () {
 
    const FoldersList = [
        {
            "id": 1,
            "icon": folders,
            "name": "Downloads",
            "count": "0 files",
            "content":""
        },
        {
            "id": 2,
            "icon": folders,
            "name": "Personal Stuff",
            "count": "0 files"
        },
        {
            "id": 3,
            "icon": folders,
            "name": "Work",
            "count": "0 files"
        },
        {
            "id": 4,
            "icon": folders,
            "name": "Recordings",
            "count": "0 files"
        },
        {
            "id": 5,
            "icon": folders,
            "name": "New Project",
            "count": "0 files"
        },
    ]
    return (
        <div className="folder-items">
            {FoldersList.map((post, index) => (
                <Link key={index} to={`/folder/${post.name}`}>
                    <CreatedFolderItem index={index} post={post} />
                </Link>
            ))}
        </div>
    );
}

