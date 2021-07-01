import React, { useState, FunctionComponent, useEffect } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

type View =
  | "initial"
  | "firstQuestion"
  | "howMuchLove"
  | "tastes"
  | "day-night"
  | "movie-maybe"
  | "movies-opt"
  | "dinner-opt";

export type Step = {
  view: View;
};

const Wizard = () => {
  const [step, setStep] = useState<Step>({
    view: "initial",
  });

  const VIEW: Record<Partial<Step["view"]>, JSX.Element> = {
    initial: (
      <Initial onContinue={() => setStep({ ...step, view: "firstQuestion" })} />
    ),
    firstQuestion: (
      <FirstQuestion
        onBack={() => setStep({ ...step, view: "howMuchLove" })}
        onContinue={() => setStep({ ...step, view: "tastes" })}
      />
    ),
    howMuchLove: (
      <FirstQuestion
        onBack={() => setStep({ ...step, view: "howMuchLove" })}
        onContinue={() => setStep({ ...step, view: "tastes" })}
      />
    ),
  };

  return VIEW[step.view];
};

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

const FirstQuestion: FunctionComponent<{
  onBack: () => void;
  onContinue: () => void;
}> = ({ onBack, onContinue }) => {
  return (
    <div>
      <h1 style={{ margin: "10px 0" }}>Pero antes ... 😏 </h1>
      <div style={{ padding: "15px", maxWidth: "90%" }}>
        <img src="https://media.giphy.com/media/JXaXmDLWIwcBq/giphy.gif" />
      </div>
      <div>
        <p style={{ margin: "10px", maxWidth: "90%" }}>
          Primero lo primero 🤷‍♂️ {""}
          Arrancamos el cuestionario con un par de preguntas obligatorias {""}
          😇😈👊
        </p>
        <Button onClick={onContinue}> Okei ✔️</Button>
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

export default Wizard;
