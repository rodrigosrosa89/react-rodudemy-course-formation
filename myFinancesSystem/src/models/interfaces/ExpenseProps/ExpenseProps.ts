import type { Movement } from "./../movement/Movement";

export interface ExpenseProps {
  emitMovement: (mvement: Movement) => void;
  currentExpenses: number;
  currentBalance: number;
}
