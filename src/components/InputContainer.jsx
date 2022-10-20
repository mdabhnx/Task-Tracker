import React from "react";

const InputContainer = () => {
  return (
    <div style={{ display: "flex" }}>
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
      >
        Create
      </button>
    </div>
  );
};

export default InputContainer;
