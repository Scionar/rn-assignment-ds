export const validateUserId = (str: string) => {
  return !isNaN(+str);
};
