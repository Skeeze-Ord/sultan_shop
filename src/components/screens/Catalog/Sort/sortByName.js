export const sortByName = (items, type) => {
  const sorted = [...items].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (type === "asc") {
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
    } else if (type === "desc") {
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
    }
    return 0;
  });

  return sorted;
};
