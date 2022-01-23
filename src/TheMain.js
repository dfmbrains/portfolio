import React, {useState} from 'react';
import MainRu from "./content/ru/MainRu";
import Main from "./content/Main";
import './content/style/themain.css';

const TheMain = () => {

    const [language, setLanguage] = useState('eng');
    const engHandler = () => {
        return setLanguage('eng')
    };
    const ruHandler = () => {
        return setLanguage('ru')
    };

    return (
        <div className="themain">
            <div className="btns">
                <button style={{color: `${language === 'ru' ? '#070707' : '#828282'}`}} onClick={() => ruHandler()} className="btn" id='ru'>RU</button>
                <span className="line">|</span>
                <button style={{color: `${language === 'eng' ? '#070707' : '#828282'}`}} onClick={() => engHandler()} className="btn" id="eng">ENG</button>
            </div>
            {language === 'eng'
                ? <Main/>
                : <MainRu/>
            }
        </div>
    );
};

export default TheMain;