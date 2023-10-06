import React from "react";
import styles from "./page.module.css";
import "./Home.css"; // You import styles from an external CSS file, but you don't use the 'styles' variable

function Home() {
  return (
    <div className="container">
      <div className="content">
        <div className="header">
          <h1>Запросить пользователей</h1>
          <p className="subtitle">
            Введите 10-ти значный код, чтобы запросить пользователей GitHub
          </p>
        </div>
        <div className="input-container">
          <input
            type="text"
            className="code-input"
            placeholder="Введите 10-значный код"
          />
          <button className="request-button">Запросить</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
