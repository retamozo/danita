import { FunctionComponent } from "react";

export type Step =
| "initial"
| "first-question"
| "how-much-love"
| "tastes"
| "day-night"
| "movie-maybe"
| "movies-opt"
| "dinner-opt";

export type Routes = {
step: Step;
component: FunctionComponent;
};