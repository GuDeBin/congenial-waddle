import React from "react";
import "./App.css";
import Demo1 from "./pages/Demo1";
import Demo2 from "./pages/Demo2";
import Demo3 from "./pages/Demo3";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Demo1></Demo1>
        <Demo2></Demo2>
        <Demo3></Demo3>
      </div>
    </DndProvider>
  );
}

export default App;
