import React from "react";
import DetailTodo from "./DetailTodo";

import { Router, Switch, Route } from 'react-router-dom';
import { history } from "../context/AppContext";
import Header from "./Header";
import { AddTodo } from "../containers/AddTodo";
import { Todos } from "../containers/Todos";
import AppContextProvider from "../context/AppContextProvider";

const App = () => {
  return (
    <AppContextProvider>
      <div className="ui container">
        <Router history={ history }>
          <Header />
          <Switch>
            <Route path="/" exact component={ Todos } />
            <Route path="/todo" exact component={ DetailTodo } />
            <Route path="/new" exact component={ AddTodo } />
          </Switch>
        </Router>
      </div>
    </AppContextProvider>
  );
};

export default App;
