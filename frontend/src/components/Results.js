import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import SelectBasicExample from './Filters';

function GroupExample() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/api/movies') // Llamada a la API
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies: ', error));
  }, []);

  const filteredMovies = filter
    ? movies.filter(movie => movie.platform === filter)
    : movies;

  return (
    <div>
      <SelectBasicExample setFilter={setFilter} />
      <CardGroup>
        {filteredMovies.map(movie => (
          <Card key={movie.id}>
            <Card.Img variant="top" src={movie.imageUrl} alt={movie.title} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>{movie.platform}</small>
            </Card.Footer>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default GroupExample;