import type { Movement } from "../movement/Movement";

export interface BalanceProps {
  emitMovement: (movement: Movement) => void;
  currentBalance: number;
}
