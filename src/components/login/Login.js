import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/user";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import "./Login.css";

const Login = (prop) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        // validationSchema={}
        onSubmit={(values) => {
          console.log(values);
          dispatch(login(values));
        }}
      >
        <Form onSubmit={(data) => console.log(data)}>
          <label>User Name: </label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" />
          <br />
          <label>password: </label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
          <br />
          <button type="submit" className="submitButton">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
