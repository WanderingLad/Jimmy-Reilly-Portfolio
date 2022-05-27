import React from 'react';

export default function About() {
  return (
    <section id="AboutMe">
        <div className="blank-space"></div>
        {/* <h2>About Me</h2> */}
        <div className="flex-container space-around reverse">
            <div className="intro">
                <p>
                    I'm Xuyang Zhang, a professional Software Engineer located in Atlanta, Georgia. I have a serious
                    desire for
                    creating functional software products that will solve critical business problems, and great passion
                    towards
                    creating intuitive, dynamic user experience.
                </p>
                <p>
                    I stared my career in VMware as a Software Consultant in the End User Computing business, helping
                    enterprise
                    clients with their Digital Transformation initiatives, by implementing and adopting VMware Workspace
                    ONE
                    product suite, managing iOS, Android, Windows, macOS endpoints. During this time, I also built
                    serveral
                    in house tools for the Professional Services department leveraging no-code solutions, including
                    Power
                    Automate,
                    PowerApps, etc. That's when it sparked my desire to brush up my software development skills, because
                    although no-code development is great and promising, it is also limited, and sometimes certain
                    workflow
                    requires
                    complicated design that simply cannot be achieved using no-code solutions.
                </p>
                <p>
                    Being a diligent, hardworking and result-oriented person, I always work towards achieving best
                    result on
                    project I lay my hands on.
                </p>
            </div>
            <div className="largememoji">
                <img src="./assets/images/me_greeting.png" alt="Author's memoji figure waving hand to greet" />
            </div>
        </div>
    </section>
  );
}