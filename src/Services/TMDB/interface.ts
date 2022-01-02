export interface IMovieReq {
  type: "upcoming" | "popular" | "top_rated" | String;
  page: Number;
}
export interface ICategoryReq {
  category: "movie" | "tv" | String;
  id?: Number | String;
//   page?: Number;
//   query?: String;
}
