import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <nav className="login">
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log In With GitHub
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
