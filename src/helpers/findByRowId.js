// Recursive function to find Row by id - Returns the row if found
const findRowById = (parentId, items) => {
  for (let i = 0; i < items.length; i++) {
    console.log(
      '🚀 ~ file: fieldNameTypeSlice.js:75 ~ items[i]:',
      items[i].id,
      parentId
    );
    if (items[i].id === parentId) {
      return items[i];
    }
    if (items[i].items) {
      const result = findRowById(parentId, items[i].items);
      if (result) {
        return result;
      }
    }
  }
  return null;
};

export default findRowById;
