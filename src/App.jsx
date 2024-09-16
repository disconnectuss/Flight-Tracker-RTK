import React, { useState } from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import ListView from "./components/ListView";

function App() {
  const [activeButton, setActiveButton] = useState("map");

  return (
    <>
      <Header />
      <div className="mb-4">
        <button
          onClick={() => setActiveButton("map")}
          className={`border border-r-4 border-blue-500 px-4 py-2 rounded-l-md transition duration-300 ${
            activeButton === "map"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
          }`}
        >
          Map View
        </button>
        <button
          onClick={() => setActiveButton("list")}
          className={`border border-blue-500 px-4 py-2 rounded-r-md transition duration-300 ${
            activeButton === "list"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
          }`}
        >
          List View
        </button>
      </div>
      {activeButton === "map" && <MapView />}
      {activeButton === "list" && <ListView />}
    </>
  );
}

export default App;
