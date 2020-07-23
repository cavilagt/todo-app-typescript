import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TodoList from "../../components/TodoList";

describe("<TodoList /> component", ()=> {
  
  afterEach(cleanup);

  it("reders without crashing",()=>{
    const roodDiv = document.createElement("div");
    ReactDOM.render( <TodoList />, roodDiv );
  });

  it("renders correctly empty", ()=>{
    const roodDiv = document.createElement("div");
    const { container } = render( <TodoList />, roodDiv );

    expect( container ).toMatchSnapshot();
  });

  it("renders correctly with todos", ()=>{
    const roodDiv = document.createElement("div");
    const todo = [{title:'Title todo test', status:"completed", uid:"1234", description:"A description, just for testing"}];
    const { container } = render( <TodoList {...todo} />, roodDiv );

    expect( container ).toMatchSnapshot();
  });

});