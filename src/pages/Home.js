import React from 'react';

export default function Home() {
  return (
    <section id="Home">
        <div className="flex-container no-wrap space-around">
            <div className="intro">

                <p className="hi"> Hi There <img src="./assets/images/emoji.svg" alt="" /> I'm </p>
                <h1 style={{marginBottom: 0}}>Xuyang Zhang</h1>
                <p className="bigFont">Tech Evangelist + Full Stack Developer </p>
                <p className="info"> I’m a Full Stack Developer that started as a Technical Implementation Consultant in
                    End-User
                    Computing Field.
                </p>
                <a className="btn" href="#ContactMe"> <span>Hire Me</span> </a>
            </div>
            <div className="largememoji">
                <img src="./assets/images/me_behind_laptop.png" alt="Author's memoji figure behind a laptop" />
            </div>
        </div>
    </section>
  );
}