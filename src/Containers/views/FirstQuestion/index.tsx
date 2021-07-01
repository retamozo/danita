import { Button } from "../../../components";
import React, { FunctionComponent } from "react";

export const FirstQuestion: FunctionComponent<{
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