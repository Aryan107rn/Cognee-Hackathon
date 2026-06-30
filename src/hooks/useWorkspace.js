import { useState, useEffect } from 'react';

export const useWorkspace = () => {
  const [workspace, setWorkspace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return { workspace, loading, error };
};

export default useWorkspace;
