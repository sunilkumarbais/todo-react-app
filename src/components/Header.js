import { useEffect, useState } from "react";
import Logo from "../assets/image.jpg";

export const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "lightGray"
  );

  useEffect(() => {
    const body = document.querySelector("body");
    body.removeAttribute("class");
    body.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <header className="header sticky-top">
      <div className="logo-section">
        <img src={Logo} alt="Taskmate Logo" />
        <span>Taskmate</span>
      </div>

      <div className="theam-section">
        <ul>
          <li onClick={() => setTheme("lightGray")}>
            <span
              className={
                theme === "lightGray" ? "active lightGray" : "lightGray"
              }
            ></span>
          </li>

          <li onClick={() => setTheme("medium-dark")}>
            <span
              className={
                theme === "medium-dark" ? "active medium-dark" : "medium-dark"
              }
            ></span>
          </li>

          <li onClick={() => setTheme("gOne")}>
            <span
              className={theme === "gOne" ? "active gOne" : "gOne"}
            ></span>
          </li>

          <li onClick={() => setTheme("gTwo")}>
            <span
              className={theme === "gTwo" ? "active gTwo" : "gTwo"}
            ></span>
          </li>

          <li onClick={() => setTheme("moreG")}>
            <span
              className={theme === "moreG" ? "active moreG" : "moreG"}
            ></span>
          </li>
        </ul>
      </div>
    </header>
  );
};
