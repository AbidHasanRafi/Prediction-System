import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Team from "./Team";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <main className="w-full">
        <Body />
      </main>
      <Team />
      <Footer />
    </div>
  );
};

export default App;
