import React from "react";

import "../Styles/Main.css";

function App() {
  return (
    <div className="main">
      <div className="title">
        <ol className="ordering-list">
          <li className="img-list">
            <img src="/images/me.jpeg" alt="" />
          </li>
          <li>
            <h1>Баттүвшин</h1>
          </li>
          <li>
            <h2>Student of MStars Academy</h2>
          </li>
        </ol>
      </div>
      <div className="contract">
        <div className="email">
          <a href="">
            <p>mglbaagii03@gmail.com</p>
            <img src="/images/google.png" alt="" />
          </a>
        </div>
        <div className="facebook">
          <a href="https://www.facebook.com/profile.php?id=100023976380395">
            <p> Баттүвшин.Т</p>
            <img src="/images/fb.png" alt="" />
          </a>
        </div>
        <div className="number">
          <a href="">
            <p>+976 95645347</p>
            <img src="/images/phone.png" alt="" />
          </a>
        </div>
      </div>
      <div className="description">
        <p>
          {" "}
          Hi! My name is Battuvshin. Im 19 years old. Just graduated <br /> high
          school last year and currently studying development at <br /> MStars
          Academy right now. I don't have job at the moment and looking <br />{" "}
          for one.
        </p>
      </div>
    </div>
  );
}

export default App;
