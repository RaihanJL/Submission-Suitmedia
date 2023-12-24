export const changeDate = (inputDate) => {
  const resultString = new Date(inputDate).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return resultString;
};
