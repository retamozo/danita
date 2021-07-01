import { useChangeView } from "../../hooks";
import { Step } from "@/types";
import React, { FunctionComponent, useState } from "react";
import {
  DayOrNight,
  Initial,
  DinnerOptions,
  FirstQuestion,
  HowMuchLove,
  MovieMaybe,
  MoviesOptions,
} from "../../Containers/views";
const DanaeFlow = () => {
  const { goToView } = useChangeView();
  const COMMON_PROPS = {
    goToView,
  };
  const STEPS: Record<"initial", FunctionComponent | React.ReactElement> = {
    initial: <Initial {...COMMON_PROPS} />,
    // "first-question": FirstQuestion,
    // "how-much-love": HowMuchLove,
    // tastes: Tastes,
    // "day-night": DayOrNight,
    // "movie-maybe": MovieMaybe,
    // "movies-opt": MoviesOption,
    // "dinner-opt": DinnerOptions,
  };

  return <>{STEPS.initial}</>;
};

export default DanaeFlow;
