import dbConnect from '../../../util/mongo'
import Product from '../../../models/Product.model'


export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    if (method === 'GET') {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        }catch(err) {
            res.status(500).json(err);
        }
    }

    if (method === 'POST') {
        try {
            const product = Product.create(req.body);
            res.status(201).json("Pizza created");
        }catch(err) {
            res.status(500).json(err);
        }
    }
}