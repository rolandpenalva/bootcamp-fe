import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/user";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(5, "Too Short!").required("Required"),
  password: Yup.string().min(5, "Too Short!").required("Required"),
});

const Login = (prop) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log("Data::::");
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>User Name: </label>
            <Field type="text" name="username" id="username" />
            {errors.username && touched.username ? (
              <div className="error">{errors.username}</div>
            ) : null}
            <br />
            <label>password: </label>
            <Field type="password" name="password" id="password" />
            {errors.password && touched.password ? (
              <div className="error">{errors.password}</div>
            ) : null}
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
