import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "./Registration.module.css";

export default function Registration() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed!")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters")
      .required("Password is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Register</h2>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => {
          return (
            <Form>
              <div className={styles.formField}>
                <Field
                  name="name"
                  value={values.name}
                  placeholder="Name"
                  type="text"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error}
                />
              </div>

              <div className={styles.formField}>
                <Field
                  name="email"
                  value={values.email}
                  placeholder="Email"
                  type="email"
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
                  value={values.password}
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Register
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
