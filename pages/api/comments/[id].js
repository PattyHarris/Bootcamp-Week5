import comments from '../../../comments.json';

const commentsByID = (req, res) => {
    res.status(200).json({ post: req.query.id, comments });
}

export default commentsByID;