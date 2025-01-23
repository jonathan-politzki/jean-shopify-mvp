import { shopify } from '../../../lib/shopify';

export default async function handler(req, res) {
  if (!req.query.shop) {
    res.status(400).send('Missing shop parameter');
    return;
  }

  try {
    const authRoute = await shopify.auth.begin({
      shop: req.query.shop,
      callbackPath: '/api/auth/callback',
      isOnline: true,
    });

    res.redirect(authRoute);
  } catch (error) {
    console.error('OAuth begin error:', error);
    res.status(500).send('Authentication failed');
  }
}
