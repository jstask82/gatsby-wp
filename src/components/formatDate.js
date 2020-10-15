export default date =>
  new Date(date).toLocaleString("de-DE", { timeZone: "UTC" })
