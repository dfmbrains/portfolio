import React from 'react';
import '../styleDark/headerDark.css';

const HeaderRuDark = () => {
    return (
        <header className="headerdark">
           <div className="container">
               <ul className="headerdark__menu">
                   <li className="headerdark__list">
                       <a href="#contactrudark" className="headerdark__link">Главная</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="" className="headerdark__link">Обо мне</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="" className="headerdark__link">Навыки</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="" className="headerdark__link">Портфолио</a>
                   </li>
                   <li className="headerdark__list">
                       <a href="" className="headerdark__link">Контакты</a>
                   </li>
               </ul>
           </div>
        </header>
    );
};

export default HeaderRuDark;