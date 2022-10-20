import React, { useState } from "react";
import "../styles/taskUnit.css";

const TaskUnit = ({ task = "d3mo task", timeInHr = 0, timeInMin = 0 }) => {
  const [isPaused, setIsPaused] = useState(false);

  const onPausePlayHandler = () => {
    setIsPaused(!isPaused);
  };

  const onCompletedHandler = () => {};

  return (
    <div
      style={{
        height: "80px",
        padding: "12px",
        background: "rgb(243 243 243)",
        width: "80vw",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div className="" style={{ alignItems: "center", display: "flex" }}>
        <p>{task}</p>
      </div>
      <div className="" style={{ display: "flex" }}>
        <div
          className="timer"
          style={{
            background: "#ffffff",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            font: "lato",
            fontSize: "28px",
          }}
        >
          <p className="lf-hour">00</p>
          <p>:</p>
          <p className="lf-min">00</p>
          <p>:</p>
          <p className="lf-sec">00</p>
        </div>
        <div
          className="pause"
          style={{
            background: "#ffffff",
            borderRadius: "10px",
            marginLeft: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            font: "lato",
          }}
          onClick={onPausePlayHandler}
        >
          <div className="pause-or-paly">{isPaused ? " Play" : "Pause"}</div>
        </div>
        <div
          className="completed"
          style={{
            background: "#ffffff",
            borderRadius: "10px",
            marginLeft: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            font: "lato",
          }}
          onClick={onCompletedHandler}
        >
          <div>Completed</div>
        </div>
      </div>
    </div>
  );
};

export default TaskUnit;
