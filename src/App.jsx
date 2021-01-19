import React from "react";
import "./styles.scss";

// Components
import Card from "./components/Card";

// Assets
import icon1 from "./assets/images/icon-supervisor.svg";
import icon2 from "./assets/images/icon-karma.svg";
import icon3 from "./assets/images/icon-team-builder.svg";
import icon4 from "./assets/images/icon-calculator.svg";

const cardData = [
  {
    title: "Supervisor",
    text: "Monitors activity to identify project roadblocks",
    icon: icon1
  },
  {
    title: "Calculator",
    text: "Uses data from past projects to provide better delivery estimates",
    icon: icon4
  },
  {
    title: "Team Builder",
    text:
      "Scans our talent network to create the optimal team for your project",
    icon: icon3
  },
  {
    title: "Karma",
    text: "Regularly evaluates our talent to ensure quality",
    icon: icon2
  }
];

export default function App() {
  return (
    <>
      <div className="App">
        <header>
          <h1>Reliable, efficient delivery</h1>
          <h2>Powered by Technology</h2>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </header>

        <section>
          {cardData.map((card, index) => (
            <Card key={index} gridName={`card${index + 1}`} {...card} />
          ))}
        </section>
      </div>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="/">Bayajit Mohammed</a>.
        </p>
      </footer>
    </>
  );
}
