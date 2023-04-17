// passedFunction is a function got from above function
//req res next are returned  to next function

export const tryCatchError = (passedFunction) => (req, res, next) => {
  //calls next fucntion when promise gets rejected
  Promise.resolve(passedFunction(req, res, next)).catch(next);
};
