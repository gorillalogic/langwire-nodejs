import { Request, Response } from 'express';

const Controller = {
    index: (_req: Request, res: Response) => {
        res.status(200).render('queries/index', {
            pageTitle: 'Queries',
        })
    },
}

export default Controller;