import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'test',
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.get('/books', (req, res) => {
  const booksQuery = 'SELECT * FROM books';
  db.query(booksQuery, (err, data) => {
    if (err) res.json(err);
    return res.json(data);
  });
});

app.post('/books', (req, res) => {
  const createBookQuery = 'INSERT INTO books(`title`, `desc`, `cover`) VALUES (?)';
  const values = [req.body.title, req.body.desc, req.body.cover];
  db.query(createBookQuery, [values], (err, data) => {
    if (err) res.json(err);
    return res.json('Successfully created book');
  });
});

app.listen(8080, () => {
  console.log(`listening on port 8080`);
});
