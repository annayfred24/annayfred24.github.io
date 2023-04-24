import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import python from "../assets/img/pythonIcon.png";
import java from "../assets/img/javaIcon.png";
import c from "../assets/img/cIcon.png";
import html from "../assets/img/htmlIcon.png";
import reactIcon from "../assets/img/reactIcon.png";
import React from "react";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={python} alt="" /> 
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={reactIcon} alt="" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={c} alt="" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="" />
                                <h5>Java</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
