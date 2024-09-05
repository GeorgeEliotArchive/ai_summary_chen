import React from "react";
import Banner from "../../../assets/img/banner.png";


const Introduction = () => {

  return (
    <div className="index-container">
      <hr />
      <div className="banner">
        <img src={Banner} alt="Banner" />
      </div>
      <p>
        AI Text Analysis is a compilation of AI-generated, chapter-by-chapter
        text analysis of George Eliot's major works of fiction.
      </p>
     
    </div>
  );
}

export default Introduction
