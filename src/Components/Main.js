import React from "react";

import "../Styles/Main.css";

function App() {
  return (
    <div className="main row">
      <div className="margin-div">
        <div className="first-col col-5">
          <div className="img-div">
            <img src="/images/me.jpeg" alt="" />
          </div>
          <div className="name-div">
            <h1>
              Battuvshin <br />
              Tuvshinjargal
            </h1>
            <h2>Student of MStars</h2>
          </div>
          <div className="contract-div">
            <a href="" className="fb">
              <img src="/images/fb.png" alt="" />
            </a>
            <a href="" className="email">
              <img src="/images/google.png" alt="" />
            </a>
          </div>
          <div className="skills-div">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="second-col col-7">
          <div className="profile-div">
            <h1>Profile</h1>
            <p>
              Hi! My name is Battuvshin. Im 19 years old. Just graduated <br />{" "}
              high school last year and currently studying development at <br />{" "}
              MStars Academy right now. I don't have job at the moment and
              looking <br /> for one. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea praesentium <br /> nostrum provident dolorum
              doloribus mollitia!
            </p>
          </div>
          <div className="achievements">
            <h1>My Specialty</h1>
            <ol>
              <li>I am a quick learner</li>
              <li>I don't give up easily</li>
              <li>I can be hard working</li>
              <li>I am a creative thinker</li>
              <li>I see double sides</li>
              <li>
                I am a Sports lover mostly likes to play Basketball and
                Volleyball
              </li>
              <li>I care about my health most of the time</li>
              <li>I have no toxic habits</li>
            </ol>
          </div>
          <div className="education">
            <h1>Education</h1>
            <div className="english">
              <p>2011-2012</p>
              <h2>
                <b>Went to Ausralia</b>
              </h2>
              <p>
                Graduated 4th and 5th grade. I would say my English level is{" "}
                <b>Above Avarage</b>
              </p>
            </div>
            <div className="highschool">
              <p>2009-2021</p>
              <h2>Graduated University of Internal Affairs High School</h2>
              <p>
                <b>General Admission test:</b> <br /> Mongolian Language : 480{" "}
                <br /> English : 680 <br /> Social Science : 550
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
