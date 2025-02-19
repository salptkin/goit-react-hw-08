import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "./ContactsForm.module.css";

export default function ContactsForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed!")
      .required("Name is required"),
    number: Yup.number()
      .transform((value, originalValue) =>
        originalValue.trim() === "" ? null : value
      )
      .nullable()
      .required("Number is required!")
      .positive("Number can't be negative value!")
      .integer(),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Add Contact</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, handleChange }) => (
          <Form>
            <div className={styles.formField}>
              <Field
                name="name"
                placeholder="Name"
                value={values.name}
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
                name="number"
                placeholder="Number"
                value={values.number}
                onChange={handleChange}
              />
              <ErrorMessage
                name="number"
                component="div"
                className={styles.error}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
