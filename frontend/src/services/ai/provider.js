// AI Provider Service
import geminiService from './gemini';
import openaiService from './openai';
import claudeService from './claude';

export const aiProvider = {
  getProvider: (providerName) => {
    switch (providerName) {
      case 'gemini':
        return geminiService;
      case 'openai':
        return openaiService;
      case 'claude':
        return claudeService;
      default:
        return null;
    }
  },
};

export default aiProvider;
