import React from "react";
import DetailTodo from "./DetailTodo";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import { AddTodo } from "../containers/AddTodo";
import { Todos } from "../containers/Todos";
import AppContextProvider from "../context/AppContextProvider";
import { PAGES } from "./Constants";

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <div className="ui container">
          <Header />
          <Routes>
            <Route path={ PAGES.HOME } Component={ Todos } />
            <Route path={ PAGES.DETAIL } Component={ DetailTodo } />
            <Route path={ PAGES.ADD_NEW } Component={ AddTodo } />
          </Routes>
        </div>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
