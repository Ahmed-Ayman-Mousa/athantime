import Home from "./app/pages/home";
import Timer from "./app/pages/timer";
import { useState } from "react";

function App() {
  const [theme, setheme] = useState(localStorage.getItem("theme"));
  document.querySelector("html").setAttribute("theme", theme);
  localStorage.setItem("theme", theme);
  /**
   * if it's first time to use app it's will @var {<Home/>}component
   * else it's will go to home component
   */
  const element = () => {
    if (localStorage.getItem("country") === null) {
      return <Home />;
    } else {
      return <Timer />;
    }
  };
  return (
    <>
      <h1 id="logo">وقت الأذان</h1>
      {element()}
      <button
        id="theme"
        onClick={() => {
          if (localStorage.getItem("theme") === "light") {
            setheme("dark");
          } else {
            setheme("light");
          }
        }}
      >
        {theme}
      </button>
    </>
  );
}

export default App;

/**
 * @author Ahmed-Ayman-Mousa
 * @member ahmed.ayman.mousa2009
 */
