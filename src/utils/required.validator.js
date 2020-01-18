const validateRequired = (value) => {
  let error;
  if (!value) {
    error = 'Обязательное поле';
  }
  return error;
};

export default validateRequired;
