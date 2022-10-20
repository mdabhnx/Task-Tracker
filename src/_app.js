import React, { createContext, useState } from "react";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";

export const Context = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <Context.Provider value={{ tasks: tasks, setTasks: setTasks }}>
        <Layout>
          <HomePage />
        </Layout>
      </Context.Provider>
    </>
  );
};

export default App;
