const formatTimeStamp = (timestamp: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateObj = new Date(timestamp);
  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours() % 12 || 12;
  const minutes = dateObj.getMinutes();
  const ampm = dateObj.getHours() >= 12 ? "pm" : "am";

  const formattedDate = `${month} ${day}, ${year}`;
  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;

  return {
    formattedDate,
    formattedTime,
  };
};

export default formatTimeStamp;
