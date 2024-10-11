import React from "react";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  onClick = () => {},
  isLoading = false,
}) => {
  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.button}
        onClick={onClick}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
