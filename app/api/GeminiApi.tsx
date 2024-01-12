import { GoogleGenerativeAI } from "@google/generative-ai";

const GeminiApi = async (prompt: string) => {
    if (!prompt.trim()) {
        throw new Error("Prompt cannot be empty");
    }

    const API_KEY = 'AIzaSyDStJ6PU7eUePmmDr5sAMr6LalbQBkdF7c';
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    console.log(result.response.text())

    return result.response.text().toString();
};

export default GeminiApi;
