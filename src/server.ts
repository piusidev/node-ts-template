import express from 'express';

const app = express();

app.get('/', (_request, response) => response.json({ message: 'Hello World' }));

app.listen(3333);
