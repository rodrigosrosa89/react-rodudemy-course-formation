import type { FinanceControlProps } from "../../models/interfaces/FinanceControlProps/FinanceControlProps";
import type { Movement } from "../../models/interfaces/movement/Movement";
import Balance from "../Balance/Balance";
import "./FinanceControl.css";

const FinanceControl = ({
  handleSetMovement,
  balance,
  expenses,
}: FinanceControlProps) => {
  const receiveNewMovement = (movement: Movement) => {
    movement && handleSetMovement(movement);
  };

  return (
    <div className="container_finances">
      <Balance
        currentBalance={balance}
        emitMovemente={receiveNewMovement}
        key={expenses}
      />
      {/* EXPENSE */}
    </div>
  );
};

export default FinanceControl;
