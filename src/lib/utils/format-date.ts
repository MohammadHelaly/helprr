const dateFormatter = new Intl.DateTimeFormat(undefined, {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: 'numeric',
  minute: '2-digit',
});

export function formatDate(value: number) {
  return dateFormatter.format(new Date(value));
}

export function formatTime(value: number) {
  return timeFormatter.format(new Date(value));
}
