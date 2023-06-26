import React, { useState } from "react";
import { DBUsers } from "../DataBase/DBUsers";
import { Link } from "react-router-dom";

export const AuthorizationWindow = () => {
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

  const checkCredentials = (login, password, database) => {
    return new Promise((resolve, reject) => {
      const transaction = database.transaction("Users", "readonly");
      const store = transaction.objectStore("Users");
      const request = store.get(login);

      request.onsuccess = () => {
        const user = request.result;

        if (user) {
          if (user.password === password) {
            resolve("Пользователь успешно авторизован");
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", user.login);
            window.location.reload();
            window.location.href = "/";
          } else {
            setErrorMessage("Введен неправильный пароль");
            shakeText();
          }
        } else {
          setErrorMessage("Пользователь с таким логином не найден");
          shakeText();
        }
      };

      request.onerror = (event) => {
        reject(event.target.error);
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setErrorMessage("Неверный логин или пароль");
      shakeText();
    } else {
      DBUsers().then((database) => {
        checkCredentials(username, password, database).then((message) => {
          console.log(message);
        });
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-8 ">
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            Войдите в аккаунт
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Или{" "}
            <Link
              to="/signin"
              className="font-medium text-yellow-400 hover:text-yellow-300"
            >
              создайте новый
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
              Войти
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

export default AuthorizationWindow;
