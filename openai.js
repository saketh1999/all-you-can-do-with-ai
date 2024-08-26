import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const openai = new OpenAI({
  baseURL: 'https://kolank.com/api/v1',
  apiKey: process.env.OPEN_API_KEY
});

export { openai };
