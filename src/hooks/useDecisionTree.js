import { useState, useEffect } from 'react';

export const useDecisionTree = () => {
  const [tree, setTree] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return { tree, loading, error };
};

export default useDecisionTree;
