import { useState, useEffect } from 'react';

export const useBranches = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return { branches, loading, error };
};

export default useBranches;
