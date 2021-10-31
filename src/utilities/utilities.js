// footer gallery images array and genanet function images
export const footerImages = [
  "https://i.ibb.co/YfjH3xN/dubai.jpg",
  "https://i.ibb.co/WB5znpw/london.jpg",
  "https://i.ibb.co/McYPThJ/sydney.jpg",
  "https://i.ibb.co/7bdj6hR/brazil.jpg",
  "https://i.ibb.co/KV2SDs7/male.jpg",
  "https://i.ibb.co/MSQgSys/istanbul.jpg",
];

// home section main gellary
export const gallery = [
  "https://i.ibb.co/yQqpXyx/gallery2.jpg",
  "https://i.ibb.co/2PvFRZy/gallery3.jpg",
  "https://i.ibb.co/zRH7jNp/gallery4.jpg",
  "https://i.ibb.co/y0PVtsy/gallery5.jpg",
];

// process data
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
// processs date fucntion
export const processDate = (date) => {
  const strdata = date.split("-");
  return `${strdata[0]} ${month[strdata[1] - 1]}, ${strdata[2]}`;
};

// generate random id
export const randomId = () => {
  const randomNumber = Math.round(Math.random() * 1000000);
  const id = `EV${randomNumber}ENT`;
  return id;
};

// generate random images
const findImages = [];
export const randomImage = () => {
  const index = Math.floor(Math.random() * footerImages.length);
  const currentImg = footerImages[index];
  if (findImages.includes(currentImg)) {
    return randomImage();
  } else {
    findImages.shift();
    findImages.push(currentImg);
    return currentImg;
  }
};
