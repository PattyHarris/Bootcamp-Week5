import comments from '../../comments.json';

const allComments = (req, res) => {
    res.status(200).json(comments);
}

export default allComments;