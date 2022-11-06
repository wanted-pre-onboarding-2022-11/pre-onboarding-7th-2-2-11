export const convString = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (String(month).length < 2) month = `0${month}`;
  let day = date.getDate();
  if (String(day).length < 2) day = `0${day}`;

  return `${year}-${month}-${day}`;
};

export const convDate = (string) => {
  return new Date(string);
};

export const getDatesStartToLast = (startDate, lastDate) => {
  if (!(startDate instanceof Date && lastDate instanceof Date)) return "Not Date Object";
  let result = [];
  let curDate = new Date(startDate);
  while (curDate <= lastDate) {
    result.push(convString(curDate));
    curDate.setDate(curDate.getDate() + 1);
  }
  return result;
};
