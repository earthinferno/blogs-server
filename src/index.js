import express from 'express';

const app = express();

app.use(express.json);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on http://localhost:${port}`));