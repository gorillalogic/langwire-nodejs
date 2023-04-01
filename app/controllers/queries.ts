import { Request, Response } from 'express';
import Query from '../models/query';
import mapper from '../utils/dynamodb';

const Controller = {
    index: async (_req: Request, res: Response) => {
        const iterator = mapper.scan(Query);
        let queries = [];
        for await (const item of iterator) {
            queries.push(item);
        }

        res.status(200).render('../views/queries/index', {
            pageTitle: 'Queries',
            queries: queries,
        }); 
    },
}

export default Controller;