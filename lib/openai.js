// lib/openai.js
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export async function getRecommendation(prompt) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",  // or gpt-3.5-turbo if using ChatCompletion
    prompt,
    max_tokens: 300,
    temperature: 0.7,
  });

  return response.data.choices[0].text;
}
