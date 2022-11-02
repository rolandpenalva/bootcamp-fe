import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const FormSchema = yup.object().shape({
  pass: yup
    .string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  confirm: yup
    .string()
    .oneOf([yup.ref("pass"), null], 'Must match "password" field value'),
});

const FormComponent = () => {
  return (
    <Formik
      initialValues={{
        name: "",
      }}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors }) => (
        <Form>
          <div>
            <label>
              Password
              <Field type="password" name="pass" />
            </label>
            {errors.pass && <p>{errors.pass}</p>}
          </div>
          <div>
            <label>
              Password Confirm
              <Field type="password" name="confirm" />
            </label>
            {errors.confirm && <p>{errors.confirm}</p>}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default function App() {
  return (
    <div>
      <FormComponent />
    </div>
  );
}
