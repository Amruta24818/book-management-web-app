import React from "react";
import { background } from "../default/theme";
import {LoginComponent} from "../components/LoginComponent";

export const Login = () => {
  return (
    <div
      style={{
        backgroundColor: background,
        height: "100vh",
      }}
    >
      <LoginComponent />
    </div>
  );
};
