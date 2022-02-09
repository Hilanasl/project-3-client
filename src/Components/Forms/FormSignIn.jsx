import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import useAuth from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";

const FormSignIn = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { authenticateUser, storeToken } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
      .signin(values)
      .then((res) => {
        console.log("this is signin front:", res);
        storeToken(res.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
        setError(e.response);
      });
  };
  return (
    <>
      {error && <h3 className="error">{error.message}</h3>}
      <form className='authform' onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <button>Sign in</button>
      </form>
    </>
  );
};

export default FormSignIn;
