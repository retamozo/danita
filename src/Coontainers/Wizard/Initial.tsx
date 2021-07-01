import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import styled from "styled-components";
import { Step } from ".";

const Initial: FunctionComponent<{
  onContinue: () => void;
}> = ({ onContinue }) => {
  return (
    <div>
      <h1 style={{ margin: "10px 0" }}>Hola gorda 😍</h1>
      <div style={{ padding: "15px", maxWidth: "90%" }}>
        <img src="https://media.giphy.com/media/7W1rgKAxlDe3m/giphy.gif" />
      </div>
      <div>
        <p style={{ margin: "10px", maxWidth: "90%" }}>
          Quiero que pasemos un muy lindo finde juntos, y {""}
          es por eso que decidi hacer este mini cuestionario para {""}
          que puedas elegir que te gustaría hacer 🐷🍿😋
        </p>
        <Button onClick={onContinue}>Oki ✔️</Button>
      </div>
    </div>
  );
};

const Button = styled.button`
  background: #ffffff;
  appearance: none;
  width: 50%;
  border-radius: 7px;
  margin-top: 50px;
`;

export default Initial;
