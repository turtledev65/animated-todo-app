const pickRandomItem = (arr: any[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export default pickRandomItem;
