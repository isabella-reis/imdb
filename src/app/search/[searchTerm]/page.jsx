import Results from "@/components/Results";
import React from "react";

export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&&include_adult=false`
  );

  if (!res.ok) {
    // if the response is not ok throw error
    throw new Error("Error fetching data.");
  }

  const data = await res.json(); // converting the data to json file to get it
  const results = data.results;
  // if the results exist but it is equal to zero, so there's no match for that search and we will show a message
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found.</h1>
      )}
      {results && <Results results={results}/>}
    </div>
  );
}
