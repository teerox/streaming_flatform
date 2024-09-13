document.addEventListener('DOMContentLoaded', () => {

    const movieContainer = document.getElementById('movie-container');

    fetch('http://localhost:8080/movies/all')
        .then(response => response.json())
        .then(data => displayMovies(data.content))
        .catch(error => console.error('Error fetching movies:', error));

    function displayMovies(movies) {
        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            const moviePoster = movie.poster_path ? movie.poster_path : 'default-poster.jpg';

            movieCard.innerHTML = `
                <img src="${moviePoster}" alt="${movie.title}">
                <div class="movie-info">
                    <div class="movie-title">${movie.title}</div>
                    <div class="movie-overview">${movie.overview}</div>
                    <div class="movie-meta">Release Date: ${movie.release_date} | Rating: ${movie.vote_average}</div>
                </div>
            `;

            if (movie.movie_path) {
                const playButton = document.createElement('button');
                playButton.classList.add('play-button');
                playButton.innerHTML = '▶';
                playButton.onclick = () => {
                    window.open(`http://localhost:8080/stream/with-id/${movie.id}`, '_blank');
                };
                movieCard.appendChild(playButton);
            }

            movieContainer.appendChild(movieCard);
        });
    }
});
