import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";

export const NotFound = (props) => {
  const navigate = useNavigate();

  const goDashboard = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="cv-card">
        <h1 style={{ padding: "1%", color: "white" }}>{' '}404</h1>
        <h3 style={{ left: "2%", color: "white" }}>not found</h3>
        <p style={{ left: "20%", color: "white" }}>
          {" "}
          The page that you are looking for does not exist
        </p>

        <Button
          style={{
            color: "white",
            padding: "1%",
            left: "1%",
            borderRadius: "1rem",
            color: "blue",
            backgroundColor: "aliceblue",
            border: "none",
          }}
          type="button"
          label="Go back to home"
          onClick={goDashboard}
        ></Button>
      </div>
      <div className="footer"></div>
    </div>
  );
};
