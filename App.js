import React from "react";
import ReactDOM from "react-dom/client";

// using react - const heading = React.createElement("h1", {id:"heading"}, "namaste");

//using react - root.render(heading);
// using JSX
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste
  </h1>
);
//React functional component.
const Title = () => <h1> Hello </h1>;
const number = 1000;
const HeadingComponent = () => <h1> {number}Namaste </h1>;
// const HeadingComponent = () => ( <h1 className = "heading"> Namaste  </h1 );

//writing using react for developer friendly thats we use JSX.
//how to render it.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
//rendering a component
root.render(<HeadingComponent />);
//JSX - javascript will not understand it
