const responseFormat = (req, res, next) => {
  res.success = (data) => {
    res.status(200).json({
      data,
    });
  };

  res.created = (data) => {
    res.status(201).json({
      data,
    });
  };

  res.deleted = () => {
    res.status(204);
  };

  res.error = (message, { statusCode = 500, details = {} } = {}) => {
    res.status(statusCode).json({
      error: {
        message,
        details,
      },
      metadata: {
        timestamp: new Date().toISOString(),
      },
    });
  };

  next();
};

export default responseFormat;
