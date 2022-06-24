import { blogs } from "../../../blog"

export default function handler(req, res) {
    res.status(200).json(blogs)
}