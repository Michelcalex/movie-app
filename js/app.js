const app = angular.module('MovieApp', []);


app.controller('AddMovieController', function ($scope, MovieService) {
    console.log('Add Movie Controller here');
    $scope.name = '';
    $scope.releaseDate = '';
    $scope.genre = '';

    $scope.movies = MovieService.getMovies();

    $scope.addMovie = function () {
        MovieService.addMovie($scope.name, $scope.releaseDate, $scope.genre)
        $scope.name = '';
        $scope.releaseDate = '';
        $scope.genre = '';
    }

    console.log(MovieService.getMovies());
});




app.factory('MovieService', function() {
    let movies = [];

    return {
        addMovie: function(name, date, genre) {
            movies.push(name, date, genre);
        },

        getMovies: function() {
            return movies;
        },
    };
});