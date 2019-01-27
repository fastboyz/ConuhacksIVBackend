import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { homeController } from './controllers'


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', homeController)

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

