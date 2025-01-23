import { scrapeTwitter } from "../../lib/apify";
import { getRecommendation } from "../../lib/openai";
import { buildRecommendationPrompt } from "../../lib/promptBuilder";
import axios from "axios";

export default async function handler(req, res) {
  try {
    const { twitterUrl } = req.body;
    // Extract the username from the URL (e.g. "twitter.com/elonmusk")
    const username = twitterUrl.split("twitter.com/")[1];

    // 1. Scrape tweets
    const tweets = await scrapeTwitter(username);

    // 2. Fetch products from your store (call the separate route or do it here)
    const productRes = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`);
    const { products } = productRes.data;

    // 3. Build prompt
    const prompt = buildRecommendationPrompt(tweets, products);

    // 4. Get LLM-based recommendation
    const rawResult = await getRecommendation(prompt);

    // 5. Parse or directly pass rawResult to client
    res.status(200).json({ recommendation: rawResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
