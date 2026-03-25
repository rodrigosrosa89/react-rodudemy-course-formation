import type { Movement } from "../movement/Movement";

export interface FinanceControlProps {
  handleSetMovement: (movement: Movement) => void;
  balance: number;
  expenses: number;
}
