import React, {useState} from 'react';
import MainRuDark from "./ruDark/MainRuDark";
import MainEngDark from "./engDark/MainEngDark";

const TheMain = () => {

    const [language, setLanguage] = useState('eng');

    const engHandler = () => {
        return setLanguage('eng')
    };
    const ruHandler = () => {
        return setLanguage('ru')
    };
    console.log(language)

    return (
        <div className="setlanguage">
            <div className="language__btns">
                <button style={{color: `${language === 'ru' ? '#070707' : '#828282'}`}} onClick={() => ruHandler()} className="btn" id='ru'>RU</button>
                <span className="line">|</span>
                <button style={{color: `${language === 'eng' ? '#070707' : '#828282'}`}} onClick={() => engHandler()} className="btn" id="eng">ENG</button>
            </div>

            {language === 'eng'
                ? <MainEngDark/>
                : <MainRuDark/>}
        </div>
    );
};

export default TheMain;