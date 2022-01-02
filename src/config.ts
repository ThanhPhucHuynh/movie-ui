let config: {
    Host: string,
    Key: string,
    DomainTrailer: string,
}  = {
	Host : process.env.REACT_APP_THE_MOVIE_DB_HOST || "http://127.0.0.1",
	Key : process.env.REACT_APP_THE_MOVIE_DB_KEY || "CAN'T LOAD ENV",
    DomainTrailer:  process.env.REACT_APP_DOMAIN_TRAILER || "http://127.0.0.1",
}
export default config