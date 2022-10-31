
const API_URL = ``;

export default class ImdbService {

    constructor() {

    }

    GetAuthorizationToken = () => {

    }

    GetFilmData = () => {
        let response = [];

        fetch(API_URL).then(jsonData => {
            return jsonData;
        }).finally(responseData => {
            response = responseData;
        })
            .catch(error => console.error(error));

        return response;
    }
}