import React, { useEffect, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import "../styles/taskUnit.css";
import { firestoreApp } from "../firebase/firebase";

const TaskUnit = ({
  identifier,
  task,
  timeInHr = 0,
  timeInMin,
  completeStatus,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [totalTimeInSec, setTotalTimeInSec] = useState(0);
  const [tickTracker, setTickTracker] = useState(0);
  const [leftHour, setLeftHour] = useState("");
  const [leftMin, setLeftMin] = useState("");
  const [leftSec, setLeftSec] = useState("");

  const [isCompleted, setIsCompleted] = useState(completeStatus);

  // useEffect(() => {
  //   console.log(completeStatus);
  //   if (completeStatus) {
  //   }
  // }, [completeStatus]);

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

    /**
     * @TODO - <<<Udpate the logic>>>
     * This logic is so cheap;;
     * when the time will auto-end it will show that the task time has ended.
     */
    if (xleftMin === "0" && xleftHour === "0" && xleftSec === "0") {
      onCompletedHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    if (totalTimeInSec !== 0 && !isPaused && !isCompleted) {
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
  const onCompletedHandler = async () => {
    setIsPaused(true);
    setIsCompleted(true);

    try {
      const unitRef = doc(
        firestoreApp,
        process.env.REACT_APP_ROOT_COLLECTION_NAME,
        identifier
      );

      await updateDoc(unitRef, {
        completeStatus: true,
      });

      console.log("*** data has been updated ***");
    } catch (error) {
      console.log(
        "error occured while updating the docs to completed. \n",
        error
      );
      setIsCompleted(false);
    }
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
