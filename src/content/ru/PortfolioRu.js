import React from 'react';
import '../style/portfolio.css'
import Todo from '../../assets/todo.png';
import Project3 from '../../assets/project3.png';
import Travel from '../../assets/travel.png';
import Weather from '../../assets/weather.png';
import Indicorp from '../../assets/indicorp.png';
import Mealdb from '../../assets/mealdb.png';
import Romsem from '../../assets/romsem.png';

const PortfolioRu = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <h2 className="portfolio__title">Портфолио</h2>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Travel} alt="TodoList"/>
                    <a className="portfolio__link" href="#">Travel - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Romsem} alt="TodoList"/>
                    <a className="portfolio__link" href="#">Сайт для ресторана - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Weather} alt="TodoList"/>
                    <a className="portfolio__link" href="#">Прогноз погоды - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Project3} alt="TodoList"/>
                    <a className="portfolio__link" href="#">Макет сайта для компании - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Indicorp} alt="TodoList"/>
                    <a className="portfolio__link" href="#">Макет сайта для компании - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Mealdb} alt="TodoList"/>
                    <a className="portfolio__link" href="#">Меню для ресторана - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Todo} alt="TodoList"/>
                    <a className="portfolio__link" href="#">Веб приложение для планирования задач - Homepage</a>
                </div>
            </div>
        </section>
    );
};

export default PortfolioRu;