import React from 'react';

export default function Projects() {
  return (
    <section id="MyPortfolio">
        <div className="blank-space"></div>
        <br></br>

        <div className="flex-container">
           
            <div className="flex-container">
              
                <div className="card mb-3 pt-2 bg-transparent wrappercard full-width portfolioitem text-center ">
                    <img src="./assets/images/people_eatery.png" className="card-img-top"
                        alt="People Eatery Site Screenshot" style={{maxHeight: 400}}/>
                    <div className="card-body">
                        <h5 className="card-title text-center">People Eatery Digital Menu</h5>
                        <a href="https://github.com/XuyangZhang0/people_eatery" target="_blank" className="btn">GitHub</a>
                        <a href="https://people-eatery.herokuapp.com/" target="_blank" className="btn">Deployed Version</a>
                    </div>
                </div>
               

                <div className="card mb-3 pt-2 bg-transparent wrappercard portfolioitem text-center ">
                    <img src="./assets/images/Reddit_Data_Dive.png" className="card-img-top small-size"
                        alt="Reddit Data Dive Screenshot"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Reddit Data Dive</h5>
                        <a href="https://github.com/AmyWilhoite/reddit-data-dive" target="_blank" className="card-link">GitHub</a>
                        <a href="https://amywilhoite.github.io/reddit-data-dive/" target="_blank" className="card-link">Deployed Version</a>
                    </div>
                </div>
                <div className="card mb-3 pt-2 bg-transparent wrappercard portfolioitem text-center">
                    <img src="./assets/images/weather_dashboard_screenshot.png" className="card-img-top small-size"
                        alt="Weather Dashboard Screenshot"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Weather Dashboard</h5>
                        <a href="https://github.com/xuyangzhang0/Weather-Dashboard/" target="_blank" className="card-link">GitHub</a>
                        <a href="https://xuyangzhang0.github.io/Weather-Dashboard/" target="_blank" className="card-link">Deployed Version</a>
                    </div>
                </div>
               
                <div className="card mb-3 pt-2 bg-transparent wrappercard portfolioitem text-center">
                    <img src="./assets/images/WorkDayScheduler.gif" className="card-img-top small-size"
                        alt="Workday Scheduler Screenshot"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Workday Scheduler</h5>
                        <a href="https://github.com/xuyangzhang0/Work_Day_Scheduler/" target="_blank" className="card-link">GitHub</a>
                        <a href="https://xuyangzhang0.github.io/Work_Day_Scheduler/" target="_blank" className="card-link">Deployed Version</a>
                    </div>
                </div>
              
                <div className="card mb-3 pt-2 bg-transparent wrappercard portfolioitem text-center">
                    <img src="./assets/images/CodeQuiz.gif" className="card-img-top small-size"
                        alt="Code Quiz Screenshot"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Code Quiz</h5>
                        <a href="https://github.com/xuyangzhang0/Code_Quiz/" target="_blank" className="card-link">GitHub</a>
                        <a href="https://xuyangzhang0.github.io/Code_Quiz/" target="_blank" className="card-link">Deployed Version</a>
                    </div>
                </div>
               
                <div className="card mb-3 pt-2 bg-transparent wrappercard portfolioitem text-center">
                    <img src="./assets/images/password_generator.gif" className="card-img-top small-size"
                        alt="Password Generator Screenshot"/>
                    <div className="card-body">
                        <h5 className="card-title text-center">Password Generator</h5>
                        <a href="https://github.com/xuyangzhang0/passwordGenerator/" target="_blank" className="card-link">GitHub</a>
                        <a href="https://xuyangzhang0.github.io/passwordGenerator/" target="_blank" className="card-link">Deployed Version</a>
                    </div>
                </div>
                
                
                

            </div>
        </div>
    </section>
     
  );
}