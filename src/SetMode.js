import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './content/style/themain.css';
import Main from "./content/Main";
import MainRu from "./content/ru/MainRu";
import MainEngDark from "./content/dark/engDark/MainEngDark";
import MainRuDark from "./content/dark/ruDark/MainRuDark";
const SetMode = () => {

    const [mode, setMode] = useState('light');
    const [language, setLanguage] = useState('eng');
    const main = `${language}${mode}`;
    console.log(main);

    const lightHandler = () => {
        return setMode(`light`)
    };

    const darkHandler = () => {
        return setMode(`dark`)
    };

    const engHandler = () => {
        return setLanguage(`eng`)
    };

    const ruHandler = () => {
        return setLanguage(`ru`)
    };
    return (
        <>

            <div style={{background: `${mode === 'dark' ? '#524c6e' : 'none'}`}} className="language__btns">
                <button style={{color: `${language === 'eng' ? '#000000' : '#828282'}`}} onClick={() => engHandler()} className="btn" id="eng">ENG</button>
                <span className="line">|</span>
                <button style={{color: `${language === 'eng' ? '#828282' : '#000000'}`}} onClick={() => ruHandler()} className="btn" id='ru'>RU</button>
            </div>
            <div style={{background: `${mode === 'dark' ? '#524c6e' : 'none'}`}} className="mode__btns">
                <button style={{color: `${mode === 'light' ? '#000000' : '#828282'}`}} onClick={() => lightHandler()} className="btn" id="light">LIGHT</button>
                <span className="line">|</span>
                <button style={{color: `${mode === 'light' ? '#828282' : '#000000'}`}} onClick={() => darkHandler()} className="btn" id='dark'>DARK</button>
            </div>
            <a href="#header" className={`${mode === 'light' ? 'btn_up' : 'btn_up-dark'}`}>
                <FontAwesomeIcon className={`${mode === 'light' ? 'btn_up__icon' : 'btn_up__icon-dark'}`} icon={faChevronUp} />
            </a>
            { main === 'englight'
                ? <Main/>
                : main === 'rulight'
                ? <MainRu/>
                : main === 'engdark'
                ? <MainEngDark/>
                : main === 'rudark'
                ? <MainRuDark/>
                : ''
            }
        </>
    );
};

export default SetMode;