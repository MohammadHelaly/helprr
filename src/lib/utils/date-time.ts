const dateFormatter = new Intl.DateTimeFormat(undefined, {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "numeric",
  minute: "2-digit",
});

const formatDate = (value: number) => {
  return dateFormatter.format(new Date(value));
};

const isSameDate = (left: number, right: number) => {
  const leftDate = new Date(left);
  const rightDate = new Date(right);

  return (
    leftDate.getFullYear() === rightDate.getFullYear() &&
    leftDate.getMonth() === rightDate.getMonth() &&
    leftDate.getDate() === rightDate.getDate()
  );
};

const formatTime = (value: number) => {
  return timeFormatter.format(new Date(value));
};

export { formatDate, formatTime, isSameDate };
