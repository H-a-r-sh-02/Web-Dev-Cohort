// Import the Pinecone library
const { Pinecone } = require("@pinecone-database/pinecone");

// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

// Create a dense index with integrated embedding
const chatGptIndex = pc.Index({
  name: "cohort-chatgpt",
});

async function createMemory({ vectors, metadata, messageId }) {
  await chatGptIndex.upsert({
    records: [
       {
      id: messageId,
      values: vectors,
      metadata: metadata || {},
    },
    ],
  });
}

async function queryMemory({ queryVector, limit, metadata }) {
  const data = await chatGptIndex.query({
    vector: queryVector,
    topK: limit,
    filter: metadata ? metadata : undefined,
    includeMetadata: true,
  });

  return data.matches;
}

module.exports = {
  createMemory,
  queryMemory,
};
