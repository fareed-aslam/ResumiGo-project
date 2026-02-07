export const asyncHandler = (asyncHandler) => {
  return (req, res, next) => {
    Promise.resolve(asyncHandler(req, res, next)).catch((error) => {
      return next(error);
    });
  };
};
