import React, { useState } from "react";


  function useLogin() {
    const [data, setData] = useState({
      username: "",
      password: "",
      remember: false,
    });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData({
      [name]: type === "checkbox" ? checked : value,
    });
  }
  return {data: data,  inputChange: handleInputChange}
};

const Login = ({username, password}) => {
  const {data, inputChange} = useLogin(username, password)
  return (
    <form>
      <input
        onChange={inputChange}
        value={data.username}
        name="username"
      />
      <input
        onChange={inputChange}
        type="password"
        value={data.password}
        name="password"
        />
      <input
        onChange={inputChange}
        checked={data.remember}
        type="checkbox"
        name="remember"
        />
    </form>
  );
}
  
  export default Login;
