/**
 * Created by Toshiba on 10/31/2016.
 */
//mpmcSvc.js

(function () {
    angular.module('iMovieUiApp').factory('mpmcSvc', function (helperSvc) {

        function getAll(){
            return helperSvc.requestHandler({method: 'GET', url: '/api/movieCharacters/all'});
        }

        function getTopCharacters() {
            return helperSvc.requestHandler({method: 'GET', url: '/api/movieCharacters/top'});
        }

        function getArtists() {
            return helperSvc.requestHandler({method: 'GET', url: '/api/movieCharacters/artists'});
        }

        function getOrderedYears(){
            return helperSvc.requestHandler({method: 'GET', url: '/api/movieCharacters/years'});
        }

        function getCharactersByArtist(artist) {
            return helperSvc.requestHandler({method: 'GET', url: '/api/movieCharacters/byArtist', params:{artist:artist}});
        }

        function getCharactersByMovieReleaseDate(year){
            return helperSvc.requestHandler({method: 'GET', url: '/api/movieCharacters/byYear', params:{year:year}});
        }


        return {
            getAll:getAll,
            getTopCharacters: getTopCharacters,
            getArtists: getArtists,
            getCharactersByArtist: getCharactersByArtist,
            getCharactersByMovieReleaseDate:getCharactersByMovieReleaseDate,
            getOrderedYears:getOrderedYears
        }
    })
})();