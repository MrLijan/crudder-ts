// Imports:
import express, { Application, Request, Response, NextFunction } from 'express';
import filesRouter from './components/Files/files.router';
import bodyParser from 'body-parser';

// Controllers (Route handlers) placed here
// API keys and Passport configuration placed here

// Initiate Express server:
const app: Application = express();

// DB connector will be placed here

// Express Configurations
app.set('port', process.env.PORT || 5000);

app.use(express.json());

// Primary app routes
app.get('/', (req: Request, res: Response) => {
  res.send('CrudTS Home Page');
});

app.use('/files', filesRouter);

export default app;
