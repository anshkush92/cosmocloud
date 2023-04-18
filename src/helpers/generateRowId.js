// Helper function to generate unique row id
const generateRowId = () => {
  // Initialize a counter variable
  let counter = 4;

  // Return a function that increments the counter and returns the current value as the row id
  return () => {
    const rowId = counter;
    counter += 1;
    return rowId;
  };
};

// Need to export the function that returns another function
export default generateRowId();
