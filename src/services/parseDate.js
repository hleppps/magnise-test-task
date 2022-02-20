export const parseDate = (value) => {
  const date = value ? new Date(value) : new Date();
  const timeString = date.toLocaleTimeString();
  const dateString = date.toLocaleDateString();
  return `${dateString} ${timeString}`;
};
