import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight 
            icon={<FontAwesomeIcon icon="bolt" />} 
            title="Easy and Quick"
            para="Get access to the book you purchased online instantly." 
            />
            <Highlight 
            icon={<FontAwesomeIcon icon="bolt" />} 
            title="Easy and Quick"
            para="Get access to the book you purchased online instantly." 
            />
            <Highlight 
            icon={<FontAwesomeIcon icon="bolt" />} 
            title="Easy and Quick"
            para="Get access to the book you purchased online instantly." 
            />
            {/* <div className="highlight">
                <div className="highlight__img">
                    <FontAwesomeIcon icon="bolt" />
                </div>
                <h3 className="highlight__subtitle">Easy and Quick</h3>
                <p className="highlight__para">
                    Get access to the book you purchased online instantly.
                </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
