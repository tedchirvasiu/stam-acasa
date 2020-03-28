import React from "react";
import { Redirect } from "react-router-dom";
// import { AuthService } from "../../auth";
import { UserThunks } from "../../store/UserReducer";

const RegisterComplete = () => {
  UserThunks.authenticate();
  return <Redirect to="/"></Redirect>;
};

export default RegisterComplete;
