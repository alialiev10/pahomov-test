const hasErrors = (form, fieldName) => {
  return form.touched[fieldName] && !!form.errors[fieldName];
};

export default hasErrors;
