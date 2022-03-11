const ConvDate = (movie) => {
  const rd = movie.split("-");
  const year = rd[0];
  const month = rd[1];
  const day = rd[2];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const RD = day + " " + monthNames[month - 1] + " " + year;
  return RD;
};

const ConvData = (genre) => {
  let data = "";
  Object.entries(genre).forEach(([key, value]) => {
    data += value.name + " ";
  });
  return data;
};

export { ConvDate, ConvData };
