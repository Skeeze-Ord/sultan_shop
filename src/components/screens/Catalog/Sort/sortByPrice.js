export const sortByPrice = (items, type) => {
  const sorted = [...items].sort((a, b) => {
    if (type === "asc") {
      return a.price - b.price;
    } else if (type === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return sorted;
};
