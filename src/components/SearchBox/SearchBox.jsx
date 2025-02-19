import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBoxContainer}>
      <input
        type="search"
        name="search"
        placeholder="Search"
        onChange={handleChange}
        value={currentFilter || ""}
        className={styles.searchBox}
      />
    </div>
  );
}
