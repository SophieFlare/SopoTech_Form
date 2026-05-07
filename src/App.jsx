import React from "react";
import Home from "./components/Home";
import StarsBg from "./components/atoms/StarsBg";

const App = () => {
  return (
    <div className="bg-terminal min-h-screen text-white relative">
      <StarsBg />
      <Home />
    </div>
  );
};

export default App;