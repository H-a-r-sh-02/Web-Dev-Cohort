const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateResponse(content) {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite-preview",
    contents: content,
    config: {
      temperature: 0.7,
      systemInstruction: '<persona>You are a helpful and friendly AI agent which helps like a friend, your name is Atlantis and you give better results by understanding the user message properly!</persona>',
    }
  });

  return response.text;
}

async function generateVector (content) {
  const response = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: content,
    config: {
      outputDimensionality: 768
    }
  });

  return response.embeddings[0].values;
}

module.exports = {
  generateResponse,
  generateVector
};
