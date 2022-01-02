import config from "../../config";
import { AxiosResponse } from "axios";
import { IMovieReq, ICategoryReq } from "./interface";
import API from "../../common/Api";

interface ITMDBServer {
  getMoviesList: (res: IMovieReq) => Promise<AxiosResponse<any, any>>;
  getVideo: (res: ICategoryReq) => Promise<AxiosResponse<any, any>>;
  getTrailers: (id: String) => Promise<{
    status: string;
    data: String[];
    isSuccess: boolean;
    message: any;
  }>;
}

const TMDB: ITMDBServer = {
  getMoviesList: (res: IMovieReq) =>
    API.get(
      `movie/${res.type}?api_key=${config.Key}&language=en-US&page=${res.page}`
    ),
  getVideo: (res: ICategoryReq) =>
    API.get(
      `${res.category}/${res?.id}/videos?api_key=${config.Key}&language=en-US`
    ),
  getTrailers: (id: String) =>
    TMDB.getVideo({ category: "movie", id: id })
      .then((res: any) => {
        return {
          status: "success",
          data: Array.isArray(res.data.results)
            ? res.data.results.map(
                (a: any) => `${config.DomainTrailer}${a.key}`
              )
            : [],
          isSuccess: false,
          message: null,
        };
      })
      .catch((err: any) => {
        return {
          status: "error",
          data: [],
          isSuccess: false,
          message: err,
        };
      }),
};

export default TMDB;
