import React, { useState } from "react";
import { DBUsers } from "../DataBase/DBUsers";
import { Link } from "react-router-dom";

const RegistrationWindow = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const shakeText = () => {
    const shakeText = document.getElementById("shakeText");

    shakeText.classList.add("shake-text");
    setTimeout(() => {
      shakeText.classList.remove("shake-text");
    }, 500);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const checkUsernameExists = async (username) => {
    try {
      const database = await DBUsers();
      const transaction = database.transaction("Users", "readonly");
      const store = transaction.objectStore("Users");

      return new Promise((resolve) => {
        const request = store.get(username);
        request.onsuccess = () => {
          const user = request.result;
          resolve(!user);
        };
      });
    } catch (error) {
      throw new Error("Ошибка при проверке существования логина");
    }
  };

  const addUserToDatabase = async (login, password) => {
    try {
      const database = await DBUsers();
      const transaction = database.transaction("Users", "readwrite");
      const store = transaction.objectStore("Users");

      return new Promise(() => {
        const newUser = { login, password };
        const request = store.add(newUser);
      });
    } catch (error) {
      throw new Error("Ошибка при добавлении пользователя в базу данных");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setErrorMessage("Все поля должны быть введены");
      shakeText();
    } else {
      checkUsernameExists(username).then((result) =>
        result === true
          ? addUserToDatabase(username, password) + window.location.reload()
          : setErrorMessage("Пользователь с таким логином уже существует") +
            shakeText()
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-8">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            Создайте аккаунт
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Или{" "}
            <Link
              to="/login"
              className="font-medium text-yellow-400 hover:text-yellow-300"
            >
              войдите в существующий
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="pb-3">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Логин"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Пароль"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-yellow-400 hover:text-yellow-300"
              >
                Забыли пароль?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
        <div id="shakeText" className="flex justify-center pt-3 text-red-600">
          {errorMessage}
        </div>
      </div>
    </div>
  );
};

export default RegistrationWindow;
