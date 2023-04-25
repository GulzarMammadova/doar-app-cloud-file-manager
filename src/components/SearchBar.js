import '../App.css';
import { Link } from 'react-router-dom';

export function SearchBar({ onTextChange, placeholder }) {
// function submit(e){
// if(e.key === "Enter" && e.target.value.trim() !== ""){
//     onSubmit(e.targer.value)
// }
// }
    return (
        <div className="search">
            <div className='search-bar'>
            <i class="fa-solid fa-magnifying-glass"></i>
                <input 
                 type="text"
                 onChange={(e) => onTextChange(e.target.value)} 
                 placeholder='Search for files and folders' />
            </div>
            <div className="settings">
            <ul>
            <li><Link to="/"><i class="fa-solid fa-list-ul fa-lg"></i></Link></li>
            <li><Link to="/"><i class="fa-solid fa-circle-exclamation fa-lg"></i></Link></li>
            <li><Link to="/"><i class="fa-solid fa-gear fa-lg"></i></Link></li>
          </ul>
            </div>
        </div>
    );
}


