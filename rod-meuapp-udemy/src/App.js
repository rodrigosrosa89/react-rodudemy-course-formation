import React from "react";
import Membro from "./components/Membro";
class App extends React.Component {
  render() {
    return (
      <div>
        <Membro nome="Visitante" />
      </div>
    );
  }
}

export default App;
