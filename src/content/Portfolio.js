import React from 'react';
import './style/portfolio.css'
import Todo from '../assets/todo.png';
import Project3 from '../assets/project3.png';
import Travel from '../assets/travel.png';
import Weather from '../assets/weather.png';
import Indicorp from '../assets/indicorp.png';
import Mealdb from '../assets/mealdb.png';
import Romsem from '../assets/romsem.png';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="container">
                <h2 className="portfolio__title">Portfolio</h2>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Travel} alt="TodoList"/>
                    <a target="_blank" className="portfolio__link" href="https://negeniy228.github.io/Travel/">Travel - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Romsem} alt="Romsem"/>
                    <a className="portfolio__link" href="#">Online sushi / pizza restaurant - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Weather} alt="Weather"/>
                    <a target="_blank" className="portfolio__link" href="https://weather-iota-one.vercel.app/">Online weather forecast - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Project3} alt="Project3"/>
                    <a className="portfolio__link" href="#">Web development company - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Indicorp} alt="Indicorp"/>
                    <a className="portfolio__link" href="#">Online business company - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Mealdb} alt="Mealdb"/>
                    <a target="_blank" className="portfolio__link" href="http://mealdb-iota.vercel.app">Online restaurant - Homepage</a>
                </div>
                <div className="portfolio__card">
                    <img className="portfolio__img" src={Todo} alt="TodoList"/>
                    <a target="_blank" className="portfolio__link" href="http://todo-chi-two.vercel.app">TodoList browser application - Homepage</a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;