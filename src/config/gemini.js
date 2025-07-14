//const apikey="AIzaSyBhwkQ3MlVy6Mw87vjMFr4UNyx2H4GZiRQ";

import  { GoogleGenAI }  from '@google/genai';

export default async function runChat(prompt) {
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyBhwkQ3MlVy6Mw87vjMFr4UNyx2H4GZiRQ",
  });

  const tools = [
    {
      googleSearch: {}
    },
  ];

  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
    responseMimeType: 'text/plain',
  };

  const model = 'gemini-2.5-pro';
  
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fileIndex = 0;
  
  for await (const chunk of response) {
    console.log(chunk.text);
    return chunk.text;
  }
}

/*import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"

const MODEL_NAME="gemini-pro";
const API_KEY="AIzaSyBhwkQ3MlVy6Mw87vjMFr4UNyx2H4GZiRQ";

async function runChat(prompt){
    const genAI=new GoogleGenerativeAI(API_KEY);
    const model=genAI.getGenerativeModel({model:MODEL_NAME});

    const generationConfig={
        temperature:0.9,
        topK:1,
        topP:1,
        maxOutputTokens:2048,
    };

    const safetySettings=[
        {
            category:HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category:HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category:HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category:HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold:HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        }
    ];
    const chat=model.startChat({
        generationConfig,
        safetySettings,
        history:[
        ],
    });

    const result=await chat.sendMessage(prompt);
    const response=result.response;
    console.log(response.text());
}

export default runChat;*/