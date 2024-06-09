import { useEffect, useState } from "react";

type CatFact = {
  fact: string;
  length: number;
};

export default function GetCatFacts() {
  const [catFact, setCatFact] = useState<CatFact | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCatFacts = async () => {
    try {
      setLoading(true);
      const fact = await fetch("https://catfact.ninja/fact");
      const parsedFact = await fact.json();
      setCatFact(parsedFact);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatFacts();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <button className="bg-gray-200 p-2 mb-4" onClick={fetchCatFacts}>
        Get Cat Fact
      </button>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Fact: {loading ? "Loading..." : catFact?.fact}</p>
      )}
    </div>
  );
}
