const errorHandler = (err, req, res, next) => {
  const status = res.statusCode !== 200 ? res.statusCode : 500;

  if (err.code === 11000) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  res.status(status).json({ message: err.message });
};

module.exports = errorHandler;