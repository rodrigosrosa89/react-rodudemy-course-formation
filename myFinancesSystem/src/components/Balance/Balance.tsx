import { useState } from "react";
import type { BalanceProps } from "../../models/interfaces/BalanceProps/BalanceProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import "./Balance.css";
import Button from "../Button/Button";

const Balance = ({ emitMovemente, currentBalance }: BalanceProps) => {
  const [renderInputForm, setRenderInputForm] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleRenderInPutForm = () => setRenderInputForm(!false);

  const hideInputForm = () => {
    setRenderInputForm(false);
    setIsFormValid(true);
    setInputName("");
    setInputValue("");
  };

  return (
    <div>
      <div className="balance_container">
        <div className="balance_card">
          <header className="balance_header">
            <FontAwesomeIcon icon={faDollar} color="#7af1a7" size="2x" />
            <h2>Saldo</h2>
          </header>

          <h3>{currentBalance > 0 ? currentBalance : "R$0,00"}</h3>

          {!renderInputForm && (
            <Button
              action={handleRenderInPutForm}
              title="Entradas"
              priority="Input"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
