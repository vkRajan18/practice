

const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div",{},React.createElement("h1", {},"im h1 tag"))
])

const heading = React.createElement("h1", {id:"hello"}, "hello from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);