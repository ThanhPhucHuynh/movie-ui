import React from "react";
import Api from "../../common/Api";
import { TMDB } from '../../Services'

const HomeScreen = () => {
  React.useEffect(() => {
    a();
  });
  const a = async () => {
    console.log(
      await Api.get(
        "https://random-data-api.com/api/cannabis/random_cannabis?size=30"
      )
    );

    const a = await TMDB.getMoviesList({ page: 1, type: "popular" })
    console.log(a.data.results[0].id);

    console.log(await TMDB.getTrailers(a.data.results[0].id))
  };

  return <div>HomeScreen </div>;
};

export default HomeScreen;
