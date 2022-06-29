import React from "react";
import { authApi, productApi } from "../axios";

const login = () => {
  const handleLogin = async () => {
    try {
      await authApi.login({
        username: "test01",
        password: "12345",
      });
    } catch (error) {
      console.log("login error: ", error);
    }
  };

  const handleGetAllProduct = async () => {
    try {
      await productApi.getAll();
    } catch (error) {
      console.log("get all product error: ", error);
    }
  };

  const handleLogOut = async () => {
    await authApi.logout();
  };

  return (
    <div>
      <h1>Login page</h1>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetAllProduct}>Get All Product</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default login;
