import React from "react";
import Main from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../../Cart/Cart";
import CategoryDisplay from "./Categories/CategoryDisplay";
import { Provider } from "react-redux";
import store from "../../../store/store";
import AuthorizationWindow from "../Authorization/AuthorizationWindow";
import RegistrationWindow from "../Authorization/RegistragionWindow";
import Catalog from "../Catalog/Catalog";

const Home = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route
            path="/household-chemicals"
            element={
              <CategoryDisplay
                category="household_chemicals"
                a="Бытовая химия"
              />
            }
          />
          <Route
            path="/cosmetics-hygiene"
            element={
              <CategoryDisplay
                category="cosmetics_hygiene"
                a="Косметика и гигиена"
              />
            }
          />
          <Route
            path="/household_products"
            element={
              <CategoryDisplay
                category="household_products"
                a="Товары для дома"
              />
            }
          />
          <Route
            path="/dishes"
            element={<CategoryDisplay category="dishes" a="Посуда" />}
          />
          <Route
            path="/childrens-moms"
            element={
              <CategoryDisplay
                category="childrens_moms"
                a="Товары для детей и мам"
              />
            }
          />
          <Route path="/login" element={<AuthorizationWindow />} />
          <Route path="/signin" element={<RegistrationWindow />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default Home;
