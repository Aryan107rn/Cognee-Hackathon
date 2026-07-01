// Formatter Functions

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const formatNumber = (value) => {
  return new Intl.NumberFormat('en-US').format(value);
};

export const formatPercent = (value) => {
  return `${(value * 100).toFixed(2)}%`;
};

export default {
  formatCurrency,
  formatNumber,
  formatPercent,
};
