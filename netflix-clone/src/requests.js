const API_KEY = "ca39b88b8ea32be7a47a732f661552a4";

const requests={
fetchTrending:`/movie/all/week?api_key=${API_KEY}&language=en-US`,
fetchDiscoverNetflixOriginal:`/discover/tv?api_key=${API_KEY}`,
fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchComedyMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchHorrorMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchRomanceMovies:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchDocumentaries:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchJackReaper:`/search/movie?api_key=${API_KEY}&query=Jack+Reacher`,
}

export default requests;