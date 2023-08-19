import React, { useState } from 'react';
import '../../../App.css';
import { AllFilesPost } from './AllFilesPost';
import { RecentlyAccessedList } from '../RecentlyAccessed/RecentlyAccessedList'
import pdfIcon from '../../../pictures/icons/pdf.png'
import docxIcon from '../../../pictures/icons/word.png'
import txtIcon from '../../../pictures/icons/txt.png'
import cssIcon from '../../../pictures/icons/css.png'
import jsonIcon from '../../../pictures/icons/json.png'
import htmlIcon from '../../../pictures/icons/html.png'
import mp4Icon from '../../../pictures/icons/video.png'
import jpegIcon from '../../../pictures/icons/img.png'

export function AllFilesList() {

  const [allFilesList, setAllFilesList] = useState([
    {
      "id": 1,
      "name": "For kid development.pdf",
      "size": 10.45,
      "type": "PDF File",
      "icon": pdfIcon,
      "url": "https://drive.google.com/file/d/1_hqtRaZmjIMuu3j6dAABjZABT2CytiL5/view?usp=drive_link"
    },
    {
      "id": 2,
      "name": "Marathon.docx",
      "size": 22.67,
      "type": "Word Document",
      "icon": docxIcon,
      "url": "https://docs.google.com/document/d/19vte6wBcsFWfLyd0yzF_Z2D-YMdwUQWv/edit?usp=drive_link&ouid=116780887794393565861&rtpof=true&sd=true"
    },
    {
      "id": 3,
      "name": "robots.txt",
      "size": 43.9,
      "type": "Text Document",
      "icon": txtIcon,
      "url": "https://drive.google.com/file/d/1jSYyOuQU-HXqUVN7Km-iqWEOEXRRYb9O/view?usp=drive_link"
    },
    {
      "id": 4,
      "name": "Docs for VISA.docx",
      "size": 22.67,
      "type": "Word Document",
      "icon": docxIcon,
      "url": "https://docs.google.com/document/d/166VFvQn3yYhw0q4BNbDe3d8xzN9JEa7L/edit?usp=drive_link&ouid=116780887794393565861&rtpof=true&sd=true"
    },
    {
      "id": 5,
      "name": "package.json",
      "size": 2.7,
      "type": "JSON File",
      "icon": jsonIcon,
      "url": "https://drive.google.com/file/d/1Zjhx7IynK2PFASeQE78GB86bOFD7znma/view?usp=drive_link"
    },
    {
      "id": 6,
      "name": "App.css",
      "size": 42.67,
      "type": "CSS File",
      "icon": cssIcon,
      "url": "https://drive.google.com/file/d/1ZWs5UG67fOQDIhhRgYUzg4p6EUmqMFPM/view?usp=drive_link"
    },
    {
      "id": 7,
      "name": "index.html",
      "size": 42.67,
      "type": "HTML Document",
      "icon": htmlIcon,
      "url": "https://drive.google.com/file/d/1JSPLnkQTo9DdNudQi2PWttl7azs2bPCE/view?usp=drive_link"
    },
    {
      "id": 10,
      "name": "about.txt",
      "size": 42.67,
      "type": "Text Document",
      "icon": txtIcon,
      "url": "https://drive.google.com/file/d/1txCYNH5WhzXXdwsbToOjExVT6I3i63vY/view?usp=drive_link"
    },
    {
      "id": 11,
      "name": "Make the pair.pdf",
      "size": 42,
      "type": "PDF File",
      "icon": pdfIcon,
      "url": "https://drive.google.com/file/d/1_QGQOtf9hf-y3Q0U9EtycCp6N72ZVz6l/view?usp=drive_link"
    },
    {
      "id": 8,
      "name": "Dog spa.mp4",
      "size": 24.40,
      "type": "Mp4 File",
      "icon": mp4Icon,
      "url": "https://drive.google.com/file/d/1z6M-xJGS_bZGzmaw2LY58D8-m8uU7pHp/view?usp=drive_link"
    },
    {
      "id": 9,
      "name": "4.jpg",
      "size": 4.40,
      "type": "JPG File",
      "icon": jpegIcon,
      "url": "https://drive.google.com/file/d/13FXmQzcR9rLBGTrCp52llIbf39P0rCzQ/view?usp=drive_link"
    }
  ])

  const [lastOpenedUrl, setLastOpenedUrl] = useState('');

  const handleRenameFile = (fileId, newName) => {
    const updatedFilesList = allFilesList.map(file => {
      if (file.id === fileId) {
        return {
          ...file,
          name: newName
        };
      }
      return file;
    });
    setAllFilesList(updatedFilesList);
  };

  return (
    <div>
      <div className="AllFilesList-container">
        {allFilesList.map((post, index) => (
          <AllFilesPost
            key={index}
            index={index}
            post={post}
            setLastOpenedUrl={setLastOpenedUrl}
            handleRenameFile={handleRenameFile}
          />
        ))}
      </div>
      <RecentlyAccessedList lastOpenedUrl={lastOpenedUrl} />
    </div>
  )
}

