const posts = require("./db.json");

module.exports = {
  getPosts: (req, res) => {
    res.status(200).send(posts);
  },
};
