const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getTracksForHome() {
        console.log("Getting all tracks.");
        return this.get("tracks");
    }

    getAuthor(authorId) {
        console.log(`Getting author id: ${authorId}.`);
        return this.get(`author/${encodeURIComponent(authorId)}`);
    }
}

module.exports = TrackAPI;