# Complex Data Types

An extension of iterators and objects. It's the type of data you'll be working with.

```js
class Movie {
  constructor(name, director, release, imdbRating, runtime) {
    this.name = name;
    this.director = director;
    this.release = release;
    this.imdbRating = imdbRating;
    this.runtime = runtime;
  }
}

const movies = [
  new Movie("Kill Bill", "Tarantino", 2003, 8.2, "1h51"),
  new Movie("The Incredibles", "Brad Bird", 2004, 8, "1h30m"),
  new Movie("The Princess Bride", "Rob Reiner", 1987, 8, "1h38m"),
];

// Get all movies that were released after 2000
// Get all movies where director begins with 'T'
// Get the first movie in the list where the name contains 'the'
// Get the total runtime of all movies in seconds
// Get the average IMDB rating of all movies in the list
// Get the newest movie
// Get movies that have a greater runtime than 90 minutes

// Get all movies that were released after 2000
console.log(movies.filter((movie) => movie.year >= 2000));
```
