import React, { useState, useEffect } from 'react';
import axios from 'axios';

function School() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/schools')
      .then(response => {
        setSchools(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Schools</h1>
      <ul>
        {schools.map(school => <li key={school.id}>{school.name}</li>)}
      </ul>
    </div>
  );
}

export default School;
