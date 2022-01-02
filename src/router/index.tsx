import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomeScreen, NotFoundScreen } from "../pages";
import { routeName } from "../utils";

const routeItems: {
  path?: string;
  element:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
  index?: boolean | undefined;
  key?: React.Key | null | undefined;
  caseSensitive?: boolean | undefined;
}[] = [
  {
    path: routeName.HOME_APP,
    element: <HomeScreen />,
  },
  {
    path: routeName.HOME,
    element: <HomeScreen />,
  },
  {
    path: routeName.NOT_FOUND,
    element: <NotFoundScreen />,
  },
];

const RouterNavigation = () => {
  return (
    <Routes>
      {routeItems.map((item, i) => (
        <Route key={i} {...item} />
      ))}
    </Routes>
  );
};

export { RouterNavigation };
