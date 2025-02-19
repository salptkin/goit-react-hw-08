import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .max(25, "Password must be at most 25 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, handleChange }) => (
          <Form>
            <div className={styles.formField}>
              <Field
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.formField}>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
