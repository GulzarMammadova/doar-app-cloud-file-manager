import '../../../App.css';
import { AllFilesPost } from './AllFilesPost' ;
import pdf from '../../../pictures/icons/pdf.png'
import docx from '../../../pictures/icons/word.png'
import txt from '../../../pictures/icons/txt.png'
import css from '../../../pictures/icons/css.png'
import xls from '../../../pictures/icons/excel.png'
import json from '../../../pictures/icons/json.png'
import html from '../../../pictures/icons/html.png'
import mp4 from '../../../pictures/icons/video.png'
import jpeg from '../../../pictures/icons/img.png'


export function AllFilesList () {
 
    const AllFilesList = [
        {
            "id": 1,
            "name": "Medical Certificate.pdf",
            "size": 10.45,
            "type": "PDF File",
            "icon": pdf
        },
        {
            "id": 2,
            "name": "Job contract.docx",
            "size": 22.67,
            "type": "Word Document",
            "icon": docx
        },
        {
            "id": 3,
            "name": "Instructions.txt",
            "size": 43.9,
            "type": "Text Document",
            "icon": txt
        },
        {
            "id": 4,
            "name": "Inventory.xls",
            "size": 22.67,
            "type": "Spreadsheet File",
            "icon": xls
        },
        {
            "id": 5,
            "name": "package.json",
            "size": 2.7,
            "type": "JSON File",
            "icon": json
        },
        {
            "id": 6,
            "name": "style.css",
            "size": 42.67,
            "type": "CSS File",
            "icon": css
        },
        {
            "id": 7,
            "name": "home.html",
            "size": 42.67,
            "type": "HTML Document",
            "icon": html
        },
        {
            "id": 10,
            "name": "ReadMe.txt",
            "size": 42.67,
            "type": "Text Document",
            "icon": txt
        },
        {
            "id": 11,
            "name": "GettingStarted.pdf",
            "size": 42,
            "type": "PDF File",
            "icon": pdf
        },
        {
            "id": 8,
            "name": "DemoVideo.mp4",
            "size": 24.40,
            "type": "Mp4 File",
            "icon": mp4
        },
        {
            "id": 9,
            "name": "IMG_063037.jpg",
            "size": 4.40,
            "type": "JPG File",
            "icon": jpeg
        }
    ]
    return (
        <div className="AllFilesList-container">
            {AllFilesList.map((post, index) => (
                <AllFilesPost key={index} index={index} post={post} />
            ))}
        </div>
    )
}

