import React from "react";
import style from './FormControls.module.css';

export const Textarea = ({ input, type, meta: { touched, error, warning }, ...props }) => {
  const hasError = touched && error;
  const classes = style.form + " " + (hasError ? style.error : '');

  return (
    <div className={classes} >
      <textarea {...input} {...props} type={type} />
      {hasError && <span>{error}</span>}
    </div>

  )
}