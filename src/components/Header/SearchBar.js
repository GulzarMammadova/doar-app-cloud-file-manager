import '../../App.css';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

export function SearchBar({ onTextChange, filteredFiles }) {
    const { t } = useTranslation();
    const [clickedFile, setClickedFile] = useState(null);
    const [inputText, setInputText] = useState('');

    const handleTextChange = (searchText) => {
        setInputText(searchText);
        onTextChange(searchText);
    };

    const isInputEmpty = filteredFiles.length === 0;

    return (
        <div className="search">
            <div className='search-bar'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => handleTextChange(e.target.value)}
                    placeholder={t('placeholder.searchFilesAndFolders')} />
            </div>
            {!isInputEmpty && filteredFiles.length > 0 && clickedFile === null && (
                <div className="search-results">
                    {filteredFiles.map((file) => (
                        <div
                            key={file.id}
                            className={`filtered-file ${clickedFile === file.id ? 'active' : ''}`}
                            onClick={() => {
                                setClickedFile(file.id);
                                setInputText('');
                            }}>
                            <img src={file.icon} alt={file.type} />
                            <a href={file.url} target="_blank" rel="noopener noreferrer">
                                {file.name}
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
