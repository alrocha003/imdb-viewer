
//const apiKey = process.env.API_KEY;
const apiKey = '490ae4a1dc653e4841888baddd6fac27';
const API_URL = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`;

class ImdbService {
    GetAuthorizationToken = () => {

    }

    GetFilmData = () => {
        let response = [];
        fetch(API_URL).then(jsonData => {
            return jsonData.text();
        }).then(responseData => {
            debugger
            response = responseData;
        }).catch(error => console.error(error));
        return response;
    }
}

export default ImdbService;