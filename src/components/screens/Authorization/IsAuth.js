import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const IsAuth = () => {
  const username = localStorage.getItem("username");

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const LogOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <span className="font-bold">
          {isAuthenticated
            ? `Привет, ${username}`
            : "Пользователь не авторизован"}
        </span>
        {!isAuthenticated ? (
          <div>
            <Link
              to="/login"
              className="text-white px-2 float-right bg-green-500 rounded-md hover:bg-green-600"
            >
              Войти
            </Link>
          </div>
        ) : (
          <div>
            <button
              onClick={LogOut}
              className="text-white px-2 float-right bg-red-500 rounded-md hover:bg-red-600"
            >
              Выйти
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IsAuth;
