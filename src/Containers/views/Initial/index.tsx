import { Button } from "../../../components";
import { Step } from "@/types";
import React, { FunctionComponent } from "react";

export const Initial: FunctionComponent<{
  goToView: (view: Step) => void
}> = ({ goToView }) => {
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
        <Button onClick={goToView}>Oki ✔️</Button>
      </div>
    </div>
  );
};
