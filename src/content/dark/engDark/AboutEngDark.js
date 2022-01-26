import React from 'react';
import '../styleDark/aboutDark.css';

const AboutEngDark = () => {
    return (
        <section className="aboutdark">
            <div className="container">
                <h2 className="aboutdark__title">About me</h2>
                <div className="aboutdark__row">
                    <p className="aboutdark__subtitle">
                        Hi, I'm Max – Frontend web developer from Bishkek. <br/> I'm interested in web developing and everything connected with it.
                    </p>
                    <p className="aboutdark__subtitle">
                        I'm studying in Tongji University. <br/> I learn C++ programming language. Before i learned Frontend web developing: <span className="italic__dark">JavaScript / React</span>.
                    </p>
                    <p className="aboutdark__subtitle">
                        Ready to implement excellent projects <br/> with wonderful people.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutEngDark;