export const calcEventTime = (time) => {
  return new Date(time - time.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(10, 16);
};