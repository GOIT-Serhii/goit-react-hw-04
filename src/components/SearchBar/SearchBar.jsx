import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import { FaSearch } from "react-icons/fa";
export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        className={css.formik}
        initialValues={{ topic: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.topic);
          actions.resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="topic"
            placeholder="Search photos and images"
            className={css.input}
          />
          <button className={css.sbtBtn} type="submit">
            <FaSearch className={css.icon} />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
