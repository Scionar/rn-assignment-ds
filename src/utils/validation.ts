const validEmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const validateUserId = (str: string) => {
  return !isNaN(+str);
};

export const validateIsRequired = (str: string) => {
  return `${str}`.length > 0;
};

export const validateEmail = (str: string) => {
  return str.match(validEmailRegex);
};
