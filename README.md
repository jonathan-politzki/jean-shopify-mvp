# jean-shopify-mvp
Quick and clean.

A simple Shopify app that generates personalized product recommendations based on Twitter profiles.

## What It Does

1. Shows a popup on your Shopify store
2. Customer enters a Twitter profile URL
3. App analyzes the profile and recommends products from your store

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your app.

## Setup Steps

1. **Shopify Setup** (Skip if already done)
   - Create a Shopify Partner account
   - Create a development store
   - Create a new app in your Partner dashboard
   - Get your API credentials

2. **Environment Variables**
   Copy `.env.example` to `.env` and fill in:
   ```
   SHOPIFY_API_KEY=your_key
   SHOPIFY_API_SECRET=your_secret
   OPENAI_API_KEY=your_key
   ```

3. **Install in Development Store**
   - Start the dev server
   - Install the app in your development store
   - Accept the permissions

## File Structure

```
your-app/
├── components/
│   └── TwitterPopup.jsx     # Main popup UI
├── pages/
│   └── api/
│       └── recommend.js     # Main API endpoint
└── lib/
    ├── openai.js           # OpenAI integration
    ├── shopify.js          # Shopify helpers
    └── promptBuilder.js    # AI prompt formatting
```

## Key Components

1. **Popup UI (`components/TwitterPopup.jsx`)**
   - Simple form for Twitter URL input
   - Displays recommendations

2. **Recommendation API (`pages/api/recommend.js`)**
   - Gets Twitter profile data
   - Fetches store products
   - Gets AI recommendation

3. **AI Integration (`lib/openai.js`)**
   - Analyzes Twitter content
   - Matches with products

## Development Notes

- Use `npm run dev` for local development
- App runs in development mode by default
- Test with different Twitter profiles
- Ensure products are in your development store

## Troubleshooting

1. **Popup not showing?**
   - Check Shopify app installation
   - Verify script installation

2. **No recommendations?**
   - Check OpenAI API key
   - Verify Twitter URL format
   - Check store has products

## Next Steps

1. Test the app thoroughly
2. Add error handling
3. Improve recommendation accuracy
4. Add analytics