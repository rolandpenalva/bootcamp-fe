import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import React, { useState } from "react";
// import { login, logout } from "../../store/user";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
// import "./Login.css";

const LoginSchema = yup.object().shape({
  username: yup.string().min(5, "Too Short!").required("Required"),
  email: yup
    .string()
    .min(5, "Too Short!")
    .required("Required")
    .email("Not a proper email"),
  password: yup.string().required("Required").min(5, "Too Short!"),
  confirm_password: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], 'Must match "password" field value'),
});

const SignIn = (prop) => {
  return (
    <div>
      <h1>Sin In</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirm_password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log("Data::::");
          console.log(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <label>
              User Name:
              <Field type="text" name="username" id="username" />
            </label>
            {errors.username ? (
              <div className="error">{errors.username}</div>
            ) : null}
            <br />
            <label>
              Email:
              <Field type="text" name="email" id="email" />
            </label>

            {errors.email ? <div className="error">{errors.email}</div> : null}
            <br />
            <label>
              password:
              <Field type="password" name="password" />
            </label>

            {errors.password && <div className="error">{errors.password}</div>}
            <br />
            <label>
              confirm password:
              <Field type="password" name="confirm_password" />
            </label>

            {errors.confirm_password && (
              <div className="error">{errors.confirm_password}</div>
            )}
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
