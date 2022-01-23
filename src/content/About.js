import React from 'react';
import './style/about.css'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h2 className="about__title">About me</h2>
                <div className="about__row">
                    <p className="about__subtitle">
                        Hi, I'm Max – Frontend web developer from Bishkek. <br/> I'm interested in web developing and everything connected with it.
                    </p>
                    <p className="about__subtitle">
                        I'm studying in Tongji University. <br/> I learn C++ programming language. Before i learned Frontend web developing: <span className="italic">JavaScript / React</span>.
                    </p>
                    <p className="about__subtitle">
                        Ready to implement excellent projects <br/> with wonderful people.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;