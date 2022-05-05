import React from "react";

import "../Styles/Main.css";

function App() {
  return (
    <div className="main">
      <div className="margin-div">
        <div className="container">
          <div className="first-col col-5">
            <div className="img-div">
              <img src="/images/me.jpeg" alt="me" />
            </div>
            <div className="name-div">
              <h1>
                Battuvshin <br /> Tuvshinjargal
              </h1>
              <h2>
                <b>Student of MStars</b>
              </h2>
            </div>
            <div className="contract-div">
              <h1>
                <b>Contracts : </b>
              </h1>
              <ul className="contract-ul">
                <a href="">
                  <img src="/images/fb.png" alt="fb" className="fb-png" />
                  <b>Баттүвшин.Т</b>
                </a>
                <br />
                <a href="">
                  <img src="/images/ig.jpeg" alt="ig" className="ig-png" />
                  <b> Kaze_des</b>
                </a>

                <p>
                  <b>+976 95645347</b>
                </p>
                <p>
                  <b>mglbaagii03@gmail.com</b>
                </p>
              </ul>
            </div>
          </div>
          <div className="second-col col-7">
            <div className="profile">
              <h1>
                <b>Profile</b>
              </h1>
              <p>
                Hi! My name is Battuvshin. Im 19 years old. Just graduated{" "}
                <br /> high school last year and currently studying development
                at <br /> MStars Academy right now. I don't have job at the
                moment and looking <br /> for one.
              </p>
            </div>
            <div className="skill-div">
              <h1>
                <b>Skills</b>
              </h1>
              <ul>
                <li>Quick Learner</li>
                <li>Creative Thinker</li>
                <li>Good Listener</li>
                <li>Vision</li>
                <li>Sportsman</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
