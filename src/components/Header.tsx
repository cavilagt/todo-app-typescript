import React from "react";
import { Filter } from "./Filter";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="item">
        <Filter />
      </div>
      <div className="item">
        <div>
          <Link to="/new" className="ui button primary">Add</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
