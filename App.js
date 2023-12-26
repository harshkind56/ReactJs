const heading = React.createElement("h1", {id: "heading"}, "hello world from react");
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const parent = React.createElement("div")
