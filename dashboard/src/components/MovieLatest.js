import React from 'react';

let moviesLatest = {
    title: 'In the mood for love',
    description: "Película asiática clásica",
    trailer: 'www.youtube.com',
    category: "Clásica",
}

function MovieLatest () {
    return (
        <div>
            <h2 className="title">Última película creada</h2>
            <ul>
                <li>{moviesLatest.title}</li>
                <li>{moviesLatest.description}</li>
                <li>{moviesLatest.trailer}</li>
                <li>{moviesLatest.category}</li>
            </ul>
        </div>
    );
}

export default MovieLatest