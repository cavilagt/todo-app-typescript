import React from "react";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AppContext from "../../context/AppContext";
import { Todos } from "../../containers/Todos";

Enzyme.configure({ adapter: new Adapter() });

describe("<Todos /> container", ()=> {
  
  afterEach(cleanup);
  
  it("renders with context", ()=>{
    const todoList = [
      { uid: "complete", status: "completed", title: "Testing completed task", description:"That's just a task" },
      { uid: "incomplete", status: "incompleted", title: "Testing incompleted task", description:"That's just a task"}
    ];

    const contextData = { todoList }

    const wrapper = mount(
      <AppContext.Provider value={ contextData } >
        <Todos />
      </AppContext.Provider>
    );

    expect(wrapper.find(".ui").length).toBeGreaterThan(1);

  });
});