function error(res, message = "An error occurred", data = {}, statusCode = 500) {
  res.status(statusCode).json({
    success: false,
    message,
    data,
  });
}

function success(res, data = {}, message = "Request successful", statusCode = 200) {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

module.exports = {
  error,
  success,
};
