import React from "react";
import { ErrorMessageProps } from "./ErrorMessage.types";
import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className={css.erorContainer}>
      <p className={css.errorMessageessage}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
