import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Todo from "../../components/Todo";

describe("<Todo /> component", ()=> {
  
  afterEach(cleanup);
  
  it("renders without crashing", ()=>{
    const rootDiv = document.createElement("div");
    ReactDOM.render( <Todo />, rootDiv );
  });

  it("renders correctly, completed task", ()=>{
    const rootDiv = document.createElement("div");
    const todo = {title:'Title todo test', status:"completed", uid:"1234", description:"A description, just for testing"};
    const { getByTestId } = render( <Todo {...todo} />, rootDiv );

    expect( getByTestId( todo.uid )).toMatchSnapshot();
  });

  it("renders correctly, completed task", ()=>{
    const rootDiv = document.createElement("div");
    const todo = {title:'Incompleted task', status:"incompleted", uid:"4567", description:"A description, just for testing"};
    const { getByTestId } = render( <Todo {...todo} />, rootDiv );

    expect( getByTestId( todo.uid )).toMatchSnapshot();
  });
});