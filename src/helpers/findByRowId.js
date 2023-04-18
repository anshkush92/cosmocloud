// Loop through the rows and find the row with the given id
const findRowById = (rows, id) => {
  // Loop through the top level rows
  for (var i = 0; i < rows.length; i++) {
    const item = rows[i];

    // If the id matches, return the row
    if (item.id === id) {
      return item;
    }

    // If the id doesn't match, check if the row has children and if children has that id
    if (item.items) {
      // Recursively calling the function to check if the id is in the children
      const result = findRowById(item.items, id);
      if (result) {
        return result;
      }
    }
  }
};

export default findRowById;
