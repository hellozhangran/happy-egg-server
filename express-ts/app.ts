import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
    res.send('Hello world1');
});

app.listen(3001, () => {
    console.log('listen: 3001');
});