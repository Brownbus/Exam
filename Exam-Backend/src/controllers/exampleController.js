
const exampleController = (req, res) => {
  let queryParam = req.params.queryParam;
  let queryString = req.query.queryString;
  res.status(200).json({queryParam, queryString})
}

module.exports = {
  exampleController,
}