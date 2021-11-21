import React from "react";
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


// Types
// type ElementHOCProps = {
//   Element: 
// }