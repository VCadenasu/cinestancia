import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./Filters.css";

function SelectBasicExample() {
  const [platforms, setPlatforms] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch('https://localhost:5000/api/movies')
      .then(response => response.json())
      .then(data => {
        const uniquePlatforms = [...new Set(data.map(movie => movie.platform))];
        setPlatforms(uniquePlatforms);
      })
      .catch(error => console.error('Error fetching platforms: ', error));
  }, []);

  return (
    <Form.Select aria-label="Selecciona una película" onChange={(e) => setFilter(e.target.value)}>
      <option value="">Selecciona Plataforma</option>
      {platforms.map((platform, index) => (
        <option key={index} value={platform}>{platform}</option>
      ))}
    </Form.Select>
  );
}

export default SelectBasicExample;