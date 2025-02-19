import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className={styles.navContainer}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}
