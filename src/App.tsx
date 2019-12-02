import React from "react";
import "./App.css";
import CreateAuctionForm from "./components/forms/CreateAuctionForm";
import Auctions from "components/Auctions";

const App: React.FC = () => {
  return (
    <div className="App">
      <CreateAuctionForm />
      <Auctions />
    </div>
  );
};

export default App;
