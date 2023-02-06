import dbConnect from '../../../util/mongo'
import Product from '../../../models/Product.model'
import { Cagliostro } from '@next/font/google';


export default async function handler(req, res) {
    const {
        method,
        query: { id }
    } = req;

    await dbConnect();

    if (method === 'GET') {
        try {
            const product = await Product.findById(id);
            res.status(200).json(product);
        }catch(err) {
            res.status(500).json(err);
        }
    }

    if (method === 'POST') {
        try {
            const product = Product.create(req.body);
            res.status(201).json(product);
        }catch(err) {
            res.status(500).json(err);
        }
    }

    if (method === 'PUT') {
        try {
            const product = Product.create(req.body);
            res.status(201).json("Pizza created");
        }catch(err) {
            res.status(500).json(err);
        }
    }

    if (method === 'DELETE') {
        try {
            const product = Product.create(req.body);
            res.status(201).json("Pizza created");
        }catch(err) {
            res.status(500).json(err);
        }
    }
}