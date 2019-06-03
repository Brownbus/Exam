const correctHeader = (req, res, next) => {
  if (req.headers['content-type'] !== 'application/json') {
    return res.status(400).json({ error: 'Invalid Headers' });
  }
  return next();
};

module.exports = {
  correctHeader,
}