import React, { useContext } from "react";
import InputContainer from "../components/InputContainer";
import TaskUnit from "../components/TaskUnit";
import { Context } from "../_app";

const HomePage = () => {
  const { tasks } = useContext(Context);

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

      <div style={{ marginTop: "2%" }}>
        <InputContainer />
      </div>

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
          {tasks.lenght > 0 && <>-- Current Tasks --</>}
        </header>

        {tasks.map((task) => {
          console.log(task);
          return (
            <TaskUnit
              key={task.id}
              identifier={task.id}
              task={task.task}
              timeInHr={task.taskHr}
              timeInMin={task.taskMin}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
