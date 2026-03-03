import { useState } from "react";
import "./App.css";
import FinanceControl from "./components/FinanceControl/FinanceControl";
import Header from "./components/Header/Header";
import type { Movement } from "./models/interfaces/moviment/Movement";

function App() {
  const [currentBalance, setCurrentBalance] = useState(0); //State de saldo atual
  const [currentExpenses, setCurrentExpenses] = useState(0); //State de despesas atuais
  const [movementItems, setMovementItems] = useState<Array<Movement>>([]); // State de movimentações

  const setNewMovement = (movement: Movement) => {
    if (movement) {
      setMovementItems((prevMovements) => {
        const movements = [...prevMovements];
        movements.unshift({
          name: movement.name,
          value: movement.value,
          type: movement.type,
          id: Math.random().toString(),
        });
        return movements;
      });

      if (movement.type === "Input") {
        setCurrentBalance((prev) => prev + Number(movement.value));
      }

      if (movement.type === "Output") {
        setCurrentExpenses(
          (prevExpenses) => prevExpenses + Number(movement.value),
        );
        setCurrentBalance(
          (previousBalance) => previousBalance - Number(movement.value),
        );
      }
    }
  };

  return (
    <>
      <Header />
      <FinanceControl />
    </>
  );
}

export default App;
