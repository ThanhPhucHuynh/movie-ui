import React, { useState, useEffect } from "react";
import Api from "../../../common/Api";
import { TMDB } from "../../../Services";

export default function Hook() {
  React.useEffect(() => {
    a();
  });
  const a = async () => {
    console.log(
      await Api.get(
        "https://random-data-api.com/api/cannabis/random_cannabis?size=30"
      )
    );

    const a = await TMDB.getMoviesList({ page: 1, type: "popular" });
    // handleOpen(getVideo?.data.results[0].key)
    console.log(a.data.results[0].id);
    handleOpen(a.data.results[0].id);
  };

  const handleOpen = async (id: number) => {
    const getVideo = await TMDB.getVideo({
      category: "movie",
      id: id,
    });

    getVideo.data.results.map((a: any) => {
      const videoSrc = "https://www.youtube.com/embed/" + a.key;
      console.log(videoSrc);
    });

    // if (getVideo?.data.results.length > 0) {
    //   const videoSrc =
    //     "https://www.youtube.com/embed/" + getVideo?.data.results[0].key;
    //   console.log(videoSrc);
    // } else {
    //   console.log("No Trailer");
    // }
  };
  return {
    handleOpen,
  };
}
