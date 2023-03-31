import path from 'path';
import { __dirname } from './utils/common';

import express, { Express } from 'express';
import bodyParser from 'body-parser';

import ErrorRoutes from './routes/errors'; 
import QueryRoutes from './routes/queries';

const app: Express = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Resource Routes
app.use("/queries", QueryRoutes);

/// Error catching routes
app.use(ErrorRoutes);

app.listen(3000);