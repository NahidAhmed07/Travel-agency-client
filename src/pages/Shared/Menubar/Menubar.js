import React from "react";
import "./Menubar.css";
import useAuth from "../../../hooks/useAuth";

const Menubar = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>menubar {user.name}</h2>
    </div>
  );
};

export default Menubar;
