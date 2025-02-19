import React from "react";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import styles from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className={styles.appBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
