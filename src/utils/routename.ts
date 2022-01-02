interface routeNameI {
  HOME_APP: string;
  HOME: string;
  NOT_FOUND: string;
  NOT_FOUND_GA: {
    ga: string;
  };
  [x: string]:
    | string
    | {
        [x: string]: string;
      };
}

const routeName: routeNameI = {
  HOME_APP: "/",
  HOME: "/home",
  NOT_FOUND: "/notFound",
  NOT_FOUND_GA: { ga: "/notfound/ga" },
};

export { routeName };
