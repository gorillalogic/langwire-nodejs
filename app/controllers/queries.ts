import { Request, Response } from 'express';
import Query from '../models/query';
import mapper from '../utils/dynamodb';

export const index = async (_req: Request, res: Response) => {
    const iterator = mapper.scan(Query);
    let queries = [];
    for await (const item of iterator) {
        queries.push(item);
    }

    res.status(200).render('../views/queries/index', {
        pageTitle: 'Queries',
        queries: queries,
        titleFields: [
            "id", "form", "lemma", "cpostag", "postag", "feats", "head", "deprel", "phead", "pdeprel"
        ]
    });
};

export const create = async (req: Request, res: Response) => {
    const toSave = Object.assign(new Query, {
        contents: req.body.contents,
        output_conll: "[]",
        user_id: 1,
    })
    await mapper.put(toSave)
    res.redirect('/queries')
}

export default { index, create };