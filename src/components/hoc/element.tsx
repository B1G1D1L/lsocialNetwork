import React from "react";
import { InjectedFormProps } from "redux-form";
import styles from './element.module.css';

export const ElementHOC = (Element: string) => ({input, meta, ...props}: any) => {
  const hasError = meta.touched && meta.error;
  const classes = styles.form + " " + (hasError ? styles.error : '');

  return (
    <div className={classes} >
      <Element {...input} {...props} />
        {hasError && <span>{meta.error}</span>}
    </div>
  )
}


type ReduxForm = InjectedFormProps

// Types
// type ElementHOCProps = {
//   Element: 
// }