import React from "react";

const InputContainer = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
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
          required
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
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default InputContainer;
