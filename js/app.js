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

   // console.log(MovieService.getMovies());
});


app.controller('ListMovieController', function ($scope, MovieService) {
    $scope.movies = MovieService.getMovies();

    console.log($scope.movies);
    $scope.remove = function(id) {
        $scope.movies.splice(id, 1);
    };
});




app.factory('MovieService', function() {
    let movies = [];

    return {
        addMovie: function(name, date, genre) {
            let movie = {
                name,
                date,
                genre
            };
            movies.push(movie);
        },

        getMovies: function() {
            return movies;
        },
    };
});