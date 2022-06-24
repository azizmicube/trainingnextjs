import { blogs } from "../../../blog"

export default function handler(req, res) {
    const found = blogs.find(obj => {
        return obj._id === req.query.id;
    });

    console.log(req.query);

    if(found) {
        res.status(200).json(found)
    } else {
        res.status(404).json({ error: 'Data not found' })
    }
}