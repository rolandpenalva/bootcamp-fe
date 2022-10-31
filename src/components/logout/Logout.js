import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/user";
import { Field, Form, Formik } from "formik";
const Logout = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  if (user) {
    return (
      <div>
        Hi, {user.username}
        <button onClick={() => dispatch(logout())}></button>
      </div>
    );
  }

  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        {({ isSubmitting }) => {
          <Form>
            <Field type="text" name="username" />
            <Field type="password" name="password" />
            <button type="submit" disable={isSubmitting}>
              Login
            </button>
          </Form>;
        }}
      </Formik>
    </div>
  );
};

export default Logout;
