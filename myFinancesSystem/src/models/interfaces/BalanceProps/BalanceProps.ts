import type { Movement } from "../movement/Movement";

export interface BalanceProps {
  emitMovemente: (movement: Movement) => void;
  currentBalance: number;
}
