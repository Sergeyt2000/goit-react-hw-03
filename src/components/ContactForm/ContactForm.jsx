import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const initialContacts = { username: "", phonenumber: "" };
  
  const handleSubmit = (values, actions) => {     
    addContact({
      id: nanoid(10),
      name: values.username,
      number: values.phonenumber,
    });
    console.log(values.username, values.phonenumber);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialContacts} onSubmit={handleSubmit}>
      <Form className={css.contactForm}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId} />
        <label htmlFor={phoneFieldId}>Number</label>
        <Field type="tel" name="phonenumber" id={phoneFieldId} />
        <button className={css.addbtn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
