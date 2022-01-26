import React, {useState} from 'react';
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

            <div style={{background: `${mode === 'dark' ? '#3a3456' : 'none'}`}} className="language__btns">
                <button style={{color: `${language === 'eng' ? '#000000' : '#828282'}`}} onClick={() => engHandler()} className="btn" id="eng">ENG</button>
                <span className="line">|</span>
                <button style={{color: `${language === 'eng' ? '#828282' : '#000000'}`}} onClick={() => ruHandler()} className="btn" id='ru'>RU</button>
            </div>
            <div style={{background: `${mode === 'dark' ? '#3a3456' : 'none'}`}} className="mode__btns">
                <button style={{color: `${mode === 'light' ? '#000000' : '#828282'}`}} onClick={() => lightHandler()} className="btn" id="light">LIGHT</button>
                <span className="line">|</span>
                <button style={{color: `${mode === 'light' ? '#828282' : '#000000'}`}} onClick={() => darkHandler()} className="btn" id='dark'>DARK</button>
            </div>
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