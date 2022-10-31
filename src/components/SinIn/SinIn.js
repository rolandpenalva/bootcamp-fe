import React from "react";
import { Formik, Form, Field } from "formik";

const SinIn = (prop) => {
  return (
    <div>
      <h1>Sing In</h1>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form onSubmit={(data) => console.log(data)}>
          <label>User Name: </label>
          <Field name="userName" />

          <label>Email: </label>
          <Field name="email" />

          <label>password: </label>
          <Field name="password" />
          <button type="submit" className="submitButton">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SinIn;
