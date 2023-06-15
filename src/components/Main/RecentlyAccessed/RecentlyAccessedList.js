import '../../../App.css';
import { RecentlyAccessedPost } from './RecentlyAccessedPost' ;
import pdf from '../../../pictures/icons/pdf.png'
import docx from '../../../pictures/icons/word.png'
import mp4 from '../../../pictures/icons/video.png'
import jpeg from '../../../pictures/icons/img.png'


export function RecentlyAccessedList () {

    const AllFilesList = [
        {
            "id": 1,
            "name": "Medical Certificate.pdf",
            "size": 10.45,
            "icon": pdf,
            "seen": "Last accessed: 2 hours ago"

        },
        {
            "id": 2,
            "name": "Job contract.docx",
            "size": 22.67,
            "icon": docx,
            "seen": "Last accessed: 2 hours ago"
        },
        {
            "id": 11,
            "name": "GettingStarted.pdf",
            "size": 42,
            "icon": pdf,
            "seen": "Last accessed: 7 hours ago"
        },
        {
            "id": 8,
            "name": "DemoVideo.mp4",
            "size": 24.40,
            "icon": mp4,
            "seen": "Last accessed: 6 hours ago"
        },
        {
            "id": 9,
            "name": "IMG_063037.jpg",
            "size": 4.40,
            "icon": jpeg,
            "seen": "Last accessed: 8 hours ago"
        }
    ]
    return (
        <div className="AllFilesList-container">
            {AllFilesList.map((post, index) => (
                <RecentlyAccessedPost key={index} index={index} post={post} />
            ))}
        </div>
    )
}

