import '@shopify/shopify-api/adapters/node';
import { shopifyApi, LATEST_API_VERSION } from '@shopify/shopify-api';

const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: ['read_products'],
  hostName: process.env.SHOPIFY_APP_URL.replace(/https:\/\//, ''),
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: true,
});

export async function getProducts(session, limit = 5) {
  try {
    const client = new shopify.clients.Rest({ session });
    const response = await client.get({
      path: 'products',
      query: { limit }
    });
    return response.body.products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}

export { shopify };