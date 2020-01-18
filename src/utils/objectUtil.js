const deleteEmptyFields = (errors) => {
  Object.entries(errors).forEach(([key, value]) => {
    if (!value) {
      delete errors[key];
    }
  });
};
const objectUtil = {
  deleteEmptyFields,
};

export default objectUtil;
