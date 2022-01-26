import React from 'react';
import '../styleDark/portfolioDark.css';
import Todo from '../../../assets/todo.png';
import Project3 from '../../../assets/project3.png';
import Travel from '../../../assets/travel.png';
import Weather from '../../../assets/weather.png';
import Indicorp from '../../../assets/indicorp.png';
import Mealdb from '../../../assets/mealdb.png';
import Romsem from '../../../assets/romsem.png';

const Portfolio = () => {
    return (
        <section className="portfoliodark">
            <div className="container">
                <h2 className="portfoliodark__title">Portfolio</h2>
                <div className="portfoliodark__card">
                    <a target="_blank" href="https://negeniy228.github.io/Travel/">
                        <img className="portfoliodark__img" src={Travel} alt="Travel"/>
                    </a>
                    <a target="_blank" className="portfoliodark__link" href="https://negeniy228.github.io/Travel/">Travel - Homepage</a>
                </div>
                <div className="portfoliodark__card">
                    <a href="#">
                        <img className="portfoliodark__img" src={Romsem} alt="Romsem"/>
                    </a>
                    <a className="portfoliodark__link" href="#">Online sushi / pizza restaurant - Homepage</a>
                </div>
                <div className="portfoliodark__card">
                    <a target="_blank" href="https://weather-iota-one.vercel.app/">
                        <img className="portfoliodark__img" src={Weather} alt="Weather"/>
                    </a>
                    <a target="_blank" className="portfoliodark__link" href="https://weather-iota-one.vercel.app/">Online weather forecast - Homepage</a>
                </div>
                <div className="portfoliodark__card">
                    <a href="#">
                        <img className="portfoliodark__img" src={Project3} alt="Project3"/>
                    </a>
                    <a className="portfoliodark__link" href="#">Web development company - Homepage</a>
                </div>
                <div className="portfoliodark__card">
                    <a href="#">
                        <img className="portfoliodark__img" src={Indicorp} alt="Indicorp"/>
                    </a>
                    <a className="portfoliodark__link" href="#">Online business company - Homepage</a>
                </div>
                <div className="portfoliodark__card">
                    <a target="_blank" href="http://mealdb-iota.vercel.app">
                        <img className="portfoliodark__img" src={Mealdb} alt="Mealdb"/>
                    </a>
                    <a target="_blank" className="portfoliodark__link" href="http://mealdb-iota.vercel.app">Online restaurant - Homepage</a>
                </div>
                <div className="portfoliodark__card">
                    <a target="_blank" href="http://todo-chi-two.vercel.app">
                        <img className="portfoliodark__img" src={Todo} alt="TodoList"/>
                    </a>
                    <a target="_blank" className="portfoliodark__link" href="http://todo-chi-two.vercel.app">TodoList browser application - Homepage</a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;