import { useState } from "react";

export default function TwitterPopup() {
  const [twitterLink, setTwitterLink] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRecommend() {
    try {
      setLoading(true);
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ twitterUrl: twitterLink }),
      });
      const data = await res.json();
      setRecommendation(data.recommendation);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  return (
    <div style={popupStyles}>
      <h3>Paste Your Twitter URL</h3>
      <input
        type="text"
        value={twitterLink}
        onChange={(e) => setTwitterLink(e.target.value)}
        placeholder="https://twitter.com/elonmusk"
      />
      <button onClick={handleRecommend} disabled={loading}>
        {loading ? "Analyzing..." : "Get Recommendation"}
      </button>

      {recommendation && (
        <pre style={{ marginTop: 16 }}>{recommendation}</pre>
      )}
    </div>
  );
}

const popupStyles = {
  position: "absolute",
  backgroundColor: "#fff",
  padding: 20,
  border: "1px solid #ccc",
  top: "100px",
  right: "50px",
  width: "300px",
};
