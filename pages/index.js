import TwitterRecommendation from '../components/TwitterRecommendation';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Personal Style Recommender
      </h1>
      <TwitterRecommendation />
    </div>
  );
}