import React, { useEffect, useState } from "react";
import "../styles/taskUnit.css";

const TaskUnit = ({ identifier, task, timeInHr = 0, timeInMin }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [totalTimeInSec, setTotalTimeInSec] = useState(0);
  const [tickTracker, setTickTracker] = useState(0);
  const [leftHour, setLeftHour] = useState("");
  const [leftMin, setLeftMin] = useState("");
  const [leftSec, setLeftSec] = useState("");

  const [isCompleted, setIsCompleted] = useState(false);

  /**
   * @module Time-saving-to-state
   */

  useEffect(() => {
    let xleftHour = "" + totalTimeInSec / 3600;
    setLeftHour(xleftHour.split(".")[0]);
    let xleftMin = "" + totalTimeInSec / 60;
    setLeftMin(xleftMin.split(".")[0]);
    let xleftSec = "" + (totalTimeInSec % 60);
    setLeftSec(xleftSec.split(".")[0]);
  }, [totalTimeInSec]);

  /**
   *  @calculating total time has been given
   *  @unit => seconds
   */

  useEffect(() => {
    let calTimeInSec = timeInHr * 60 * 60 + timeInMin * 60;
    setTotalTimeInSec(calTimeInSec);
    setTickTracker(calTimeInSec);
  }, [timeInHr, timeInMin]);

  /**
   * @module Time-Tracker
   * @lint eslint-exception added
   */

  useEffect(() => {
    let TIME_INTERVEL_CONTROLLER;

    if (totalTimeInSec !== 0 && !isPaused) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      TIME_INTERVEL_CONTROLLER = setInterval(() => {
        setTotalTimeInSec((time) => time - 1);
      }, [1000]);
    } else {
      clearInterval(TIME_INTERVEL_CONTROLLER);
    }

    return () => clearInterval(TIME_INTERVEL_CONTROLLER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tickTracker, isPaused]);

  const onPausePlayHandler = () => {
    setIsPaused(!isPaused);
  };

  /**
   * @function Updating the todos in g-cF
   */
  const onCompletedHandler = () => {
    setIsPaused(true);
    setIsCompleted(true);
  };

  return (
    <div
      style={{
        height: "80px",
        padding: "12px",
        background: isCompleted ? "green" : "rgb(243 243 243)",
        color: isCompleted ? "white" : "black",
        width: "80vw",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        position: "relative",
        marginBottom: "4px",
      }}
    >
      <div style={{ alignItems: "center", display: "flex" }}>
        <p>{task}</p>
      </div>
      {!isCompleted ? (
        <div style={{ display: "flex" }}>
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
            <p className="lf-hour">
              {leftHour.length < 2 ? "0" + leftHour : leftHour}
            </p>
            <p>:</p>
            <p className="lf-min">
              {leftMin.length < 2 ? "0" + leftMin : leftMin}
            </p>
            <p>:</p>
            <p className="lf-sec">
              {leftSec.length < 2 ? "0" + leftSec : leftSec}
            </p>
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
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>completed</p>
        </div>
      )}
    </div>
  );
};

export default TaskUnit;
