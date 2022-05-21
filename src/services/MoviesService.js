const axios = require('axios');

class MoviesService {

  async fetchMovies() {
    try {
      const reponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TOKEN_API}`);
      // console.log('reponse', reponse)
      return reponse;
    } catch (error) {
      console.log('err', error);
      return error;
    }
  }

}
export default new MoviesService();
