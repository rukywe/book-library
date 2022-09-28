import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllbooks = async () => {
      try {
        const res = await axios.get('http://localhost:8080/books');
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllbooks();
  }, []);

  return <div>Books</div>;
};

export default Books;
