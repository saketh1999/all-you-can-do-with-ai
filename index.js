import OpenAI from 'openai'
import 'dotenv/config'

const openai = new OpenAI({
  baseURL: 'https://kolank.com/api/v1',
  apiKey: process.env.OPEN_API_KEY
});

const result = await openai.chat.completions.create({
  model: 'openai/gpt-4o',
  messages: [
    {
      role: 'system',
      content: 'You are an helpful assistant, answer any question to the best of your ability.'
    },
    {
      role: 'user',
      content: 'Hii, What is the weather like today in Santa clara?'
    }
  ]

})

console.log(result, result.choices[0].message)