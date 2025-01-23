// lib/promptBuilder.js

export function buildRecommendationPrompt(tweets, products) {
    // Combine tweets in a single string
    const userContext = tweets.join("\n");
  
    // Summarize products
    const productContext = products
      .map((p, i) => {
        const description = p.body_html?.replace(/<[^>]*>/g, "") || "";
        return `Product #${i + 1}:
  Title: ${p.title}
  Description: ${description}`;
      })
      .join("\n\n");
  
    return `
  The user has the following Twitter context:
  ${userContext}
  
  Here are some products from the store:
  ${productContext}
  
  Based on the user's Twitter content, which single product is the best recommendation? 
  Respond in JSON with fields "productTitle" and "reasoning".
    `;
  }
  