import { shopify } from '../../../lib/shopify';

export default async function handler(req, res) {
  try {
    const callbackResponse = await shopify.auth.callback({
      rawRequest: req,
      rawResponse: res
    });

    // You might want to store the session in a database
    // For MVP, we'll use the built-in session storage
    res.redirect('/'); // Redirect to app home
  } catch (error) {
    console.error('OAuth callback error:', error);
    res.status(500).send('Authentication failed');
  }
}
