import { useState, useCallback } from 'react';

export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback((message) => {
    // Send message logic
  }, []);

  return { messages, loading, sendMessage };
};

export default useChat;
