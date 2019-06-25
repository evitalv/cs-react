import React, {useState, useEffect} from "react"
import Axios from "axios"
import {Formik, Field, Form, ErrorMessage} from "formik"
import { buildYup } from 'json-schema-to-yup'
import {schema as json, config} from "./schema.js"
import Modal from "../general/Modal"

function UpdateLE(props) {
  const [legalEntity, setLegalEntity] = useState({});

  const fields = [{name: "legalName", number: 10, label: "Legal name", required: "yes"},
                  {name: "note", number: 5, label: "Note"}];

  fields.sort((a, b) => a.number - b.number);
  const markup = fields.map((item) => (
    <React.Fragment key={item.name}>
      <label htmlFor={item.name}>{item.label}</label>
      <Field type="text" name={item.name} />
      <ErrorMessage name={item.name} component="div" className="error" />
    </React.Fragment>
  ));

  function handleSubmit(values, actions) {
    Axios.put(`http://localhost:8080/legal-entities-update/${props.leid}`, values).then(
      () => {
        actions.setSubmitting(false);
        props.hide();
      },
      error => {
        actions.setSubmitting(false);
      }
    );
  }

  const yupSchema = buildYup(json, config);

  useEffect(() => {
    if (props.leid) {
      Axios.get(`http://localhost:8080/legal-entities/${props.leid}`).then(res => {
        setLegalEntity(res.data);
        console.log("Inside update effect");
        console.log(res.data);
      });
    }
  }, [props.leid]);

  return (
    <Modal isShowing={props.isShowing} title={`Update ${legalEntity[props.nameField]}`} hide={props.hide}>
      <Formik
        initialValues = {legalEntity}
        onSubmit = {handleSubmit}
        enableReinitialize = "true"
        validationSchema = {yupSchema}
        render = {(formikProps) => legalEntity ? (
          <Form>
            {markup}
            <button type="submit" disabled={formikProps.isSubmitting}>
              Submit
            </button>
            
          </Form>
        ) : null}
      />
    </Modal>
  );
}

export default UpdateLE;
