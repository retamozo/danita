import React, { FunctionComponent } from "react";
import { RouteComponentProps, RouteProps } from "react-router-dom";

type Pathname =
  | "/" //initial ? is this good ? nobody knows 🤔
  | "/first-question"
  | "/how-much-love"
  | "/tastes"
  | "/day-night"
  | "/movie-maybe"
  | "/movies-opt"
  | "/dinner-opt";

type Routes = RouteProps & {
  pathname: Pathname;
  component: RouteProps["component"];
};

const Intial: FunctionComponent = () => <div>initial</div>;
const FirstQuestion: FunctionComponent = () => <div>FirstQuestion</div>;
const HowMuchLove: FunctionComponent = () => <div>how much love</div>;
const Tastes: FunctionComponent = () => <div>tastes</div>;
const DayOrNight: FunctionComponent = () => <div>day or night</div>;
const MovieMaybe: FunctionComponent = () => <div>movie maybe ?</div>;
const MoviesOption: FunctionComponent = () => <div>movies options</div>;
const DinnerOptions: FunctionComponent = () => <div> dinner option</div>;

export const ROUTES: Routes[] = [
  {
    pathname: "/",
    component: Intial,
  },
  {
    pathname: "/first-question",
    component: FirstQuestion,
  },
  {
    pathname: "/how-much-love",
    component: HowMuchLove,
  },
  {
    pathname: "/tastes",
    component: Tastes,
  },
  {
    pathname: "/day-night",
    component: DayOrNight,
  },
  {
    pathname: "/movie-maybe",
    component: MovieMaybe,
  },
  {
    pathname: "/movies-opt",
    component: MoviesOption,
  },
  {
    pathname: "/dinner-opt",
    component: DinnerOptions,
  },
];
