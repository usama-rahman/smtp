function convertToUTCWithOffset(dateString) {
  // Split the date string into components
  let parts = dateString.split(" ");

  // Extract date and time components
  let day = parts[0];
  let d = parts[1];
  let m = parts[2];
  let y = parts[3];
  let time = parts[4];

  // Ensure time has seconds and milliseconds if missing
  if (!/:/.test(time)) {
    time += ":00";
  }

  // Concatenate the components with the timezone offset
  let formattedDate = `${day} ${d} ${m} ${y} ${time} +0000`;

  return formattedDate;
}

export default convertToUTCWithOffset;
