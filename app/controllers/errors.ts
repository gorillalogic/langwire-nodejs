import { Request, Response } from 'express';

export default {
    get404: (_req: Request, res: Response) => {
        res.status(404).render('errors/404', {
            pageTitle: 'Page Not Found',
        })
    }
}