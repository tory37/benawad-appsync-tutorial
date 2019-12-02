import React from "react";
import "./App.css";
import CreateAuctionForm from "./components/forms/CreateAuctionForm";

const App: React.FC = () => {
  return (
    <div className="App">
      <CreateAuctionForm />
    </div>
  );
};

export default App;
