"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

function Window() {
  const [code, setCode] = useState(""); // Состояние для хранения введенного кода
  const [isButtonActive, setIsButtonActive] = useState(false); // Состояние для активации/деактивации кнопки
  const router = useRouter();

  // Функция для обработки изменения введенного кода
  const handleCodeChange = (event) => {
    const newCode = event.target.value;
    setCode(newCode); // Обновляем состояние кода

    // Проверяем, соответствует ли код критериям и активируем/деактивируем кнопку
    if (isValidCode(newCode)) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  // Функция для проверки кода на соответствие критериям
  const isValidCode = (code) => {
    // Регулярное выражение для проверки наличия большой буквы, маленькой буквы, цифры и вопросительного знака
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[?]).{10}$/;
    return regex.test(code);
  };

  // Функция для обработки нажатия кнопки запроса
  const handleRequestClick = () => {
    if (isButtonActive) {
      // Переход на страницу запроса с введенным кодом
      router.push(`/request?code=${code}`);
    }
  };

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
            value={code}
            onChange={handleCodeChange} // Обработчик изменения кода
          />
          <button
            className={`request-button ${isButtonActive ? "active" : ""}`}
            onClick={handleRequestClick} // Обработчик нажатия кнопки
          >
            Запросить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Window;
