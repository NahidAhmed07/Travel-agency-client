export const footerImages = [
  "https://i.ibb.co/YfjH3xN/dubai.jpg",
  "https://i.ibb.co/WB5znpw/london.jpg",
  "https://i.ibb.co/McYPThJ/sydney.jpg",
  "https://i.ibb.co/7bdj6hR/brazil.jpg",
  "https://i.ibb.co/KV2SDs7/male.jpg",
  "https://i.ibb.co/MSQgSys/istanbul.jpg",
];

export const posts = [
  {
    img: "https://i.ibb.co/fdjNMbq/food-Charity.png",
    title: "How About Fall Cleaning?",
    date: "April 05, 2020",
    id: "ID12012",
  },
  {
    img: "https://i.ibb.co/B4Dg9hV/bird-House.png",
    title: "Four Ways a Clean",
    date: "May 02, 2021",
    id: "ID12013",
  },
  {
    img: "https://i.ibb.co/sgb7w2N/ITHelp.png",
    title: "Time For Spring Cleaning ?",
    date: "Jun 05, 2021",
    id: "ID12014",
  },
];

const month = [
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

export const processDate = (date) => {
  const strdata = date.split("-");
  return `${strdata[0]} ${month[strdata[1] - 1]}, ${strdata[2]}`;
};
