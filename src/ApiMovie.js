const API_KEY = process.env.REACT_APP_API_KEY
const account_id = process.env.REACT_APP_ACCOUNT_ID
const session_id = process.env.REACT_APP_SESSION_ID

// Fetch trending data
const fetchTrendingData = async (time_window = 'week') => {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
};


// Fetch movie data
const fetchMovieData = async (endpoint) => {
    const response = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
};

const ApiMovie = {
    getHomeMovies: async() => {
        return [
            {
                slug: "trending",
                title: "Populaire en ce moment",
                items: await fetchTrendingData('week'),
            },
            {
                slug: "top-rated",
                title: "Mieux notés",
                items: await fetchMovieData("movie/top_rated"),
            },
            {
                slug: "popular-tv",
                title: "Séries populaires",
                items: await fetchMovieData("tv/popular"),
            },
        ];
    },
    getMovieInfo: async (movieId, type) => {
        const endpoint = `${type}/${movieId}`;
        const movieData = await fetchMovieData(endpoint);
        return movieData;
    },
};

export default ApiMovie;
