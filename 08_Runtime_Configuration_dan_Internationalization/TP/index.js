const now = new Date();

const formatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

const formattedDate = formatter.format(now);

console.log(formattedDate);