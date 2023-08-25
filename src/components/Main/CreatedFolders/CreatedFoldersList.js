
import '../../../App.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function CreatedFoldersList () {
    // const FoldersList = [
    //     {
    //         "id": 1,
    //         "icon": folders,
    //         "name": "Downloads",
    //         "count": "0 files",
    //         "content":""
    //     },
    //     {
    //         "id": 2,
    //         "icon": folders,
    //         "name": "Personal Stuff",
    //         "count": "0 files"
    //     },
    //     {
    //         "id": 3,
    //         "icon": folders,
    //         "name": "Work",
    //         "count": "0 files"
    //     },
    //     {
    //         "id": 4,
    //         "icon": folders,
    //         "name": "Recordings",
    //         "count": "0 files"
    //     },
    //     {
    //         "id": 5,
    //         "icon": folders,
    //         "name": "New Project",
    //         "count": "0 files"
    //     },
    // ]
    const { t } = useTranslation();

    return (
        <div className="folder-items">
            {/* {FoldersList.map((post, index) => (
                <Link key={index} to={`/folder/${post.name}`}>
                    <CreatedFolderItem index={index} post={post} />
                </Link>
            ))} */}
            <ul>
            <li><Link to="/important"><i className="fa-regular fa-folder fa-2xl"></i>  {t('leftBar.important')}</Link></li>
            <li><Link to="/documents"><i className="fa-regular fa-folder fa-2xl"></i>  {t('leftBar.docs')}</Link></li>
            <li><Link to="/images"><i className="fa-regular fa-folder fa-2xl"></i>  {t('leftBar.images')}</Link></li>
            <li><Link to="/videos"><i className="fa-regular fa-folder fa-2xl"></i>  {t('leftBar.video')}</Link></li>
          </ul>
        </div>
    );
}

