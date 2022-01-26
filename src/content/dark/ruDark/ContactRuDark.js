import React, {useState} from 'react';
import '../styleDark/contactDark.css';
import Linkedin from '../../../../src/assets/linkedin.png';
import Telegram from '../../../../src/assets/telegram.png';
import Gmail from '../../../../src/assets/gmail.png';
import Whatsapp from '../../../../src/assets/whatsapp.png';

const ContactRuDark = () => {

    const [state, setState] = useState(true);
    const stateHandler = () => {
        return setState(!state)
    };

    return (
        <section className="contactdark">
            <div className="container">
                <h1 className="contactdark__title">Контакты</h1>
                <p className="contactdark__subtitle">Хотите узнать больше?<br/>Пишите!</p>
                <a target="_blank" className="contactdark__btn" href="https://t.me/dfmbrains">Отправить сообщение</a>
                <div className="contactdark__icons">
                    <a target="_blank" href="https://linkedin.com/in/maxabdurasulov">
                        <img className="contactdark__img"  src={Linkedin} alt="Linkedin"/>
                    </a>
                    <a target="_blank" href="https://t.me/dfmbrains">
                        <img className="contactdark__img"  src={Telegram} alt="Telegram"/>
                    </a>
                    <a target="_blank" href="https://wa.me/996700868068">
                        <img className="contactdark__img"  src={Whatsapp} alt="Whatsapp"/>
                    </a>
                    <div className="contactdark__img-gmail">
                        {state
                            ? <img onClick={() => stateHandler()} style={{display: `${state ? 'block' : 'none'}`}} className="contactdark__img" src={Gmail} alt="Gmail"/>
                            : <p className="contactdark__img gmail__dark" onClick={() => stateHandler()}>maxabdurasulov@gmail.com</p>
                        }
                    </div>
                </div>
                <div className="contactdark__chat">
                    Пишите мне в
                    <br/>
                    <a className="contactdark__chat" target="_blank" href="https://t.me/dfmbrains"> Telegram</a>,
                    <a className="contactdark__chat" target="_blank" href="https://linkedin.com/in/maxabdurasulov"> LinkedIn</a>,
                    <a className="contactdark__chat" target="_blank" href="https://wa.me/996700868068"> Whatsapp</a>,
                    Gmail.
                </div>
            </div>
        </section>
    );
};

export default ContactRuDark;