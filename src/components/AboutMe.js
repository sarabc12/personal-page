import React from "react";
import "../aboutme.css";

export default function AboutMe() {
  return(
    <div className="aboutme-container">
      <div className="languages">
        <img src="images/ruby.png" alt="ruby"></img>
        <img src="images/virtualstudio.png" alt="virtualstudio"></img>
        <img src="images/html5.png" alt="html"></img>
        <img src="images/mysql.png" alt="mysql"></img>
        <img src="images/css.png" alt="css"></img>
        <img src="images/bootstrap.png" alt="bootstrap"></img>
        <img src="images/javascript.png" alt="javascript"></img>
        <img src="images/nodejs.png" alt="nodejs"></img>
        <img src="images/rubyonrails.png" alt="ror"></img>
        <img src="images/github.png" alt="github" style={{filter: "invert(1)"}} ></img>
        <img src="images/restAPI.png" alt="restapi"></img>
        <img src="images/react.png" alt="react"></img>
      </div>
      <div className="description">
        <h1>Hi, I'm Sara.
          From the moment I wrote my first line of code, I knew I had found something special. There's something incredibly fulfilling about turning ideas into real working products. Whether it's solving bugs or exploring new technologies, I find joy in the entire process.
          I'm driven by curiosity, determination, and a real excitement for building things that make a difference.</h1>
      </div>
    </div>

  );
}
