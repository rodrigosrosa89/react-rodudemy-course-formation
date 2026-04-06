import type { FinanceControlProps } from "../../models/interfaces/FinanceControlProps/FinanceControlProps";
import type { Movement } from "../../models/interfaces/movement/Movement";
import Balance from "../Balance/Balance";
import Expense from "../Expenses/Expense";
import "./FinanceControl.css";

const FinanceControl = ({
  handleSetMovement,
  balance,
  expenses,
}: FinanceControlProps) => {
  const receiveNewMovement = (movement: Movement) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    movement && handleSetMovement(movement);
  };

  return (
    <div className="container_finances">
      <Balance
        currentBalance={balance}
        emitMovement={receiveNewMovement}
        key={expenses}
      />
      <Expense
        currentBalance={balance}
        currentExpenses={expenses}
        emitMovement={receiveNewMovement}
      />
    </div>
  );
};

export default FinanceControl;
