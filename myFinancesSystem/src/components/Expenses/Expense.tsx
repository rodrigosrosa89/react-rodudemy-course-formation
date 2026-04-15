import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import type { ExpenseProps } from "../../models/interfaces/ExpenseProps/ExpenseProps";
import Button from "../Button/Button";
import { FormatMoney } from "../../utils/utils";
import {
  ActionsContainer,
  Card,
  CardHeader,
  Container,
  FormContainer,
  FormInput,
} from "../Balance/Balance";

const Expense = ({
  emitMovement,
  currentExpenses,
  currentBalance,
}: ExpenseProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleRenderInputForm = () => setRenderInputForm(!false);

  const hideInputForm = () => {
    setRenderInputForm(false);
    setIsFormValid(true);
    setInputName("");
    setInputValue("");
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputName.trim().length === 0 || inputValue.trim().length === 0) {
      setIsFormValid(false);
      return;
    }

    if (currentBalance >= Number(inputValue)) {
      hideInputForm();
      emitMovement({
        name: inputName,
        value: inputValue,
        type: "Output",
      });
    } else {
      setIsFormValid(false);
    }
  };

  const handleInputNameForm = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;
    if (inputName.trim().length > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    setInputName(eventValue);
  };

  const handleInpuValueForm = (event: React.FormEvent<HTMLInputElement>) => {
    const eventTarget = event.currentTarget as HTMLInputElement;
    const eventValue = eventTarget.value;
    if (inputValue.trim().length > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    setInputValue(eventValue);
  };

  return (
    <Container>
      <Card>
        <CardHeader>
          <FontAwesomeIcon
            icon={faPercent}
            color="#E43F4d"
            size="2x"
          ></FontAwesomeIcon>
          <h2>Despesas</h2>
        </CardHeader>

        <h3>
          {currentExpenses > 0
            ? FormatMoney(currentExpenses.toString())
            : "R$0,00"}
        </h3>

        {!renderInputForm && (
          <Button
            action={handleRenderInputForm}
            title="Saída"
            priority="Output"
            disable={currentBalance === 0}
          />
        )}

        {renderInputForm && (
          <form onSubmit={formSubmitHandler}>
            <FormContainer invalid={!isFormValid}>
              <FormInput
                type="text"
                placeholder="Nome"
                className="expense_input"
                value={inputName}
                onChange={handleInputNameForm}
              />
              <FormInput
                type="text"
                placeholder="Valor"
                className="expense_input"
                value={inputValue}
                onChange={handleInpuValueForm}
              />
            </FormContainer>
            <ActionsContainer>
              <Button
                title="Cancelar"
                priority="Output"
                action={hideInputForm}
              />
              <Button type="submit" title="Adicionar" priority="Input" />
            </ActionsContainer>
          </form>
        )}
      </Card>
    </Container>
  );
};

export default Expense;
