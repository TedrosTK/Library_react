import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";

export default function Landing() {
  return (
    <div>
      <section className="landing">
        <header>
          <div className="header__container">
            <div className="header__description">
              <h1>Eritrea's Most Awarded Online Library Platform</h1>
              <h2>
                Find your dream book with{" "}
                <span className="purple">Library</span>
              </h2>
              <a href="#features">
                <button className="btn">Browse books</button>
              </a>
            </div>
            <figure className="header__img--wrapper">
              <img src={UndrawBooks} alt="" />
            </figure>
          </div>
        </header>
      </section>
    </div>
  );
}
