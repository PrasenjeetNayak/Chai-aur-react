import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// function MyApp() {
//   return (<>
//     <div>
//       <h1>my custom app | chai</h1>
//     </div>
//   </>)
// }
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };
// const anotherElement = (
//   <a href="https://google.com" target="_blank">visit google</a>
// )

const anotheruser = " chai aur code "

const reactElemetnt = React.createElement(
  'a',
  { href: "https://google.com",
    target: "_blank"
  },
  "click me to visit google",
  anotheruser
)
ReactDOM.createRoot(document.getElementById("root")).render(
  // <App />
  reactElemetnt

);