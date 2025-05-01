import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { formSchema } from "../../formSchema";

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
    <Formik
      initialValues={initialContacts}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId} />
        <ErrorMessage name="username" component="span" className={css.errormsg}/>
        <label htmlFor={phoneFieldId}>Number</label>
        <Field type="tel" name="phonenumber" id={phoneFieldId} />
        <ErrorMessage name="phonenumber" component="span" className={css.errormsg}/>
        <button className={css.addbtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
