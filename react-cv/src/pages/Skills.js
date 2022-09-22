import React, { useEffect, useState } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';

import arabic from '../images/arabic.jpg';
import lightDown from '../images/light_down.png';

import Technology from '../components/Technology';

let timeSkills = 0;
let timer;

const Skills = () => {

    const [displayFront, setDisplayFront] = useState(false);
    const [displayBack, setDisplayBack] = useState(false);

    function changeDisplayFront() {
        setDisplayBack(false);
        setDisplayFront(!displayFront);
        console.log('==== FRONT ====');
        console.log(displayFront);
    }

    function changeDisplayBack() {
        setDisplayFront(false);
        setDisplayBack(!displayBack);
        console.log('==== BACK ====');
        console.log(displayBack);
    }

    useEffect(() => {
        const selectNight = document.querySelector('.background-night');
        const selectLight = document.querySelector('.switch-light');

        function displayNight() {
            selectNight.classList.remove('active-day');
            selectNight.classList.add('active-night');
        }

        function displayDay() {
            selectNight.classList.remove('active-night');
            selectNight.classList.add('active-day');
            selectLight.style.opacity = "0";
        }

        function increaseTime() {
            timeSkills ++;
            // console.log(timeSkills);

            if (timeSkills === 15) {
                displayNight();
            }

            else if (timeSkills === 20) {
                selectLight.classList.remove('inactive-light');
                selectLight.classList.add('active-light');
            }

            else if (timeSkills === 30) {
                displayDay();
            }

            else if (timeSkills === 35) {
                selectLight.classList.remove('active-light');
                selectLight.classList.add('inactive-light');
            }

            else if (timeSkills > 35) {
                timeSkills = 1;
            }
        }

        timer = setInterval(function () {
            increaseTime();
        }, 1000);

        selectLight.style.opacity = "0";

    }, [])

    useEffect(() => {
        return () => {
            console.log('composant démonté');
            clearInterval(timer);
            timeSkills = 0;
        }
    }, [])

    return (
        <div className="skills-container">
            <div className="background-picture">
                <img src={arabic} alt="" />
                <img src={lightDown} alt="" className='switch-light' />
                <div className="background-night"></div>
            </div>
            <div className="foreground-content">
                <Aside />
                <header>
                    <Navbar />
                </header>
                <main>
                    <section>
                        <div className="choice-container">
                            <div className="buttons-container">
                                <div className="skills-header">
                                    <h3>Compétences</h3>
                                </div>
                                <div className="orange-line"></div>
                                <div className="buttons">
                                    <button onClick={changeDisplayFront}>Front-end</button>
                                    <button onClick={changeDisplayBack}>Back-end</button>
                                </div>
                            </div>
                        </div>
                        <div className="language-container">
                            {displayFront && <Technology languageCategory={'Front-end'}/>}
                            {displayBack && <Technology languageCategory={'Back-end'}/>}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Skills;