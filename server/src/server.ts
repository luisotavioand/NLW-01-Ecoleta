import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

import {errors} from 'celebrate';


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const app = express();
app.use(cors(corsOptions));
app.use(routes);
app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());

app.listen(3333);

