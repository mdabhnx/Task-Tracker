import React, { createContext, useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import { firestoreApp } from "./firebase/firebase";

export const Context = createContext();

const App = () => {
  // const [globalLoader, setGlobalLoader] = useState(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const rootDataFetching = async () => {
      const Q = query(
        collection(firestoreApp, process.env.REACT_APP_ROOT_COLLECTION_NAME)
      );

      onSnapshot(Q, (querySnapshot) => {
        const todos = [];
        querySnapshot.forEach((doc) => {
          todos.push(doc.data());
        });
        console.log("todos \n", todos);
        setTasks(todos);
      });
    };

    rootDataFetching();
    // setGlobalLoader(false);
  }, []);

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
