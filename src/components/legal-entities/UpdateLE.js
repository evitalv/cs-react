import React, {useState, useEffect} from "react"
import Axios from "axios"
import {Formik, Field, Form, ErrorMessage} from "formik"
import { buildYup } from 'json-schema-to-yup'
import {schema, config} from "./schema.js"
import Modal from "../general/Modal"
import {useCustomLegalEntityDataUpdate} from "../../hooks/custom/UpdateData"
import {mergeFields, mergeValidationSchemas} from "../general/utils"
import {cSchema, cConfig} from "../../custom/schemas/cSchemaLegalEntity"

function UpdateLE(props) {
  const [legalEntity, setLegalEntity] = useState({});

  const customFields = useCustomLegalEntityDataUpdate();
  const productFields = [
    {name: "legalName", number: 10, label: "Legal name"},
    {name: "note", number: 20, label: "Note"}
  ];
  const fields = mergeFields(productFields, customFields);

  function getMarkup(values) {
    return fields.map((item) => (
      <li key={item.name}>
        <label htmlFor={item.name}>{item.label}</label>
        <Field type="text" name={item.name} value={values[item.name] || ''} />
        <ErrorMessage name={item.name} component="div" className="error" />
      </li>
    ))
  }

  function handleSubmit(values, actions) {
    Axios.put(`http://localhost:8080/legal-entities-update/${props.leid}`, values).then(
      () => {
        actions.setSubmitting(false);
        props.hide();
        props.refresh();
      },
      error => {
        actions.setSubmitting(false);
      }
    );
  }

  const [json, jsonConfig] = mergeValidationSchemas(schema, cSchema, config, cConfig);
  const yupSchema = buildYup(json, jsonConfig);

  useEffect(() => {
    if (props.leid > -1) {
      Axios.get(`http://localhost:8080/legal-entities/${props.leid}`).then(res => {
        setLegalEntity(res.data);
        console.log("Inside update useEffect");
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
        render = {(fProps) => legalEntity ? (
          <Form>
            <ul>{getMarkup(fProps.values)}</ul>
            <button type="submit" disabled={fProps.isSubmitting} class="submit">
              Submit
            </button>
          </Form>
        ) : null}
      />
    </Modal>
  );
}

export default UpdateLE;
