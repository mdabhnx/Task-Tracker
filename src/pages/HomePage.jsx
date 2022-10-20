import React from "react";
import InputContainer from "../components/InputContainer";
import TaskUnit from "../components/TaskUnit";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          fontFamily: "Inconsolata",
          fontSize: "25px",
          marginTop: "20px",
          letterSpacing: "5px",
          wordSpacing: "4px",
          textTransform: "uppercase",
        }}
      >
        Create a New Task
      </header>

      <div style={{ marginTop: "2%" }}>{/* <InputContainer /> */}</div>

      <div style={{ marginTop: "2%" }}>
        <header
          style={{
            fontFamily: "Inconsolata",
            fontSize: "25px",
            marginTop: "20px",
            letterSpacing: "5px",
            wordSpacing: "4px",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "2%",
          }}
        >
          -- Current Tasks --
        </header>

        <TaskUnit />
      </div>
    </div>
  );
};

export default HomePage;
