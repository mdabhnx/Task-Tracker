import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";

import { doc, setDoc } from "firebase/firestore";
import { firestoreApp } from "../firebase/firebase";
import { Context } from "../_app";

const InputContainer = () => {
  const { tasks, setTasks } = useContext(Context);

  const [isCreating, setIsCreating] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [taskTimeInMin, setTaskTimeInMin] = useState("");
  const [taskTimeinHour, setTaskTimeinHour] = useState("");

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const rId = nanoid();

    setIsCreating(true);

    const taskData = {
      id: rId,
      task: taskName,
      taskHr: taskTimeinHour === "" ? 0 : taskTimeinHour,
      taskMin: parseInt(taskTimeInMin),
      tarckerTaskHr: 0,
      tarckerTaskMin: 0,
      completeStatus: false,
      createdAt: new Date(),
    };

    setTasks([...tasks, taskData]);

    try {
      // await setDoc(
      //   doc(firestoreApp, process.env.REACT_APP_ROOT_COLLECTION_NAME, rId),
      //   taskData
      // );
    } catch (error) {
      console.error(error);
    }
    setTaskName("");
    setTaskTimeInMin("");
    setTaskTimeinHour("");
    setIsCreating(false);
  };
  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          style={{
            padding: "15px",
            width: "40vw",
            fontSize: "18px",
            fontFamily: "lato",
            color: "#585858",
            borderRadius: "10px",
          }}
          placeholder="Your Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          disabled={isCreating}
          required
        />
        <input
          type="number"
          style={{
            padding: "15px",
            width: "6vw",
            fontSize: "18px",
            fontFamily: "lato",
            color: "#585858",
            borderRadius: "10px",
            marginLeft: "5px",
          }}
          placeholder="hour"
          min={0}
          max={12}
          value={taskTimeinHour}
          disabled={isCreating}
          onChange={(e) => setTaskTimeinHour(e.target.value)}
        />

        <input
          type="number"
          style={{
            padding: "15px",
            width: "5vw",
            fontSize: "18px",
            fontFamily: "lato",
            color: "#585858",
            borderRadius: "10px",
            marginLeft: "5px",
          }}
          placeholder="min"
          min={0}
          max={60}
          value={taskTimeInMin}
          onChange={(e) => setTaskTimeInMin(e.target.value)}
          disabled={isCreating}
          required
        />
        <button
          style={{
            padding: "15px",
            width: "10vw",
            fontSize: "18px",
            fontFamily: "lato",
            color: "black",
            borderRadius: "10px",
            marginLeft: "5px",
            background: "gray",
          }}
          disabled={isCreating}
        >
          {isCreating ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default InputContainer;
