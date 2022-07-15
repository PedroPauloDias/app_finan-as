import React from "react";
import * as c from "./styles";
import { useState } from "react";
import Grid from "../Grid";

const Form = ({ handleAdd, transactionsList, setTransactionsList, }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState("");

  const generateID = () => Math.round(Math.random() * 1000);

  const handlesave = () => {
    if (!desc || !amount) {
      alert("informe a descrtição e o valor !");
      return;
    } else if (amount < 1) {
      alert("o valor tem que ser positivo !");
      return;
    }

    const transaction = {
      id:generateID,
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);
    setDesc("");
    setAmount("");
  };

  return (
    <>
      <c.Container>
        <c.InputContent>
          <c.Label>Descrição</c.Label>
          <c.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </c.InputContent>
        <c.InputContent>
          <c.Label>Valor</c.Label>
          <c.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </c.InputContent>
        <c.RadioGroup>
          <c.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={(e) => setExpense(!isExpense)}
          />
          <c.Label htmlFor="rIncome">Entrada</c.Label>

          <c.Input
            type="radio"
            id="rExpense"
            name="group1"
            onChange={(e) => setExpense(!isExpense)}
          />
          <c.Label htmlFor="rIncome">Saída</c.Label>
        </c.RadioGroup>
        <c.Button onClick={handlesave}>Adicionar</c.Button>
      </c.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
