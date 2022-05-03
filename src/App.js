import React from "react";
import "./App.css";

function App() {
  return (
    <div className="main row">
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
          <a href="">
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
          Сайн байна уу? <br /> Намайг Баттүвшин гэдэг. Ерөнхий боловсролын
          сургуулиа төгсөөд <br /> нэг жил болж байгаа ба одоогоор MStars
          Academy-д сураад 5 сарыг үзэж <br /> байгаа билээ. Би чөлөөт цагаараа
          мэдлэгээ өргөжүүлж өөрийгөө хөгжүүлэхэд <br /> зориулдаг ба олон талын
          мэдлэгийн хуримтлуулах хоббитой. Миний давуу <br /> тал гэвэл би
          тууштай байдал, шинийг санаачлах, боломжит байдлыг чадах <br />{" "}
          хүрээндээ тооцоолж олон талыг баримтлах тал дээр бусдаас илүү <br />{" "}
          байх гэж өөрийгөө дүгнэдэг.{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
