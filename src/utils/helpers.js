// Helper Functions

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString();
};

export const truncateString = (str, length) => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};

export default {
  formatDate,
  formatTime,
  truncateString,
};
