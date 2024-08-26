import { openai } from './openai.js'
import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const newMessage = async (history, message) => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [...history, message],
      model: 'openai/gpt-4o',

    })
    
    return chatCompletion.choices[0].message
  }
  
const formatUserMessage = (userInput) => ({role:'user',content: userInput})

const chat = () => {
    const history = [
        {role : 'system', content: 'You are an helpful assistant, answer any question to the best of your ability'}
    ]

    const start = () => {
        rl.question('\nYou:', async (userInput)=>{
            if(userInput.toLowerCase() === 'exit'){
                rl.close()
                return
            }

            const userMessage = formatUserMessage(userInput)
            const response = await newMessage(history,userMessage)
            history.push(userMessage,response);
        
            console.log('\nAI:', response.content,'\n')
            start()
        })
        
      
    }
    start()
}

console.log('\nAI: Hello, how can I help you today?')
chat();