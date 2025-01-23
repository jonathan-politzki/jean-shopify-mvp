// pages/api/products.js
import { shopify } from "../../lib/shopify";

export default async function handler(req, res) {
  try {
    // Get session from the currently installed store
    const session = await shopify.getSession(req, res);

    // Minimal product fetch (just the first 5)
    const products = await shopify.rest.Product.all({
      session,
      limit: 5,
    });

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
