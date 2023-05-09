const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  // what is searchParams? It is a param (that we just created), it is the same as using just "params"
  // and as any param, we are using it to see if there's a param (in this case "genre") and if it exist, we're using it.
  // genre is equal to searchParams.genre, if there's no genre we will use fetchTrending instead.
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 86400 } }
  );

  const data = await res.json();
  const results = data.results;

  console.log(results);

  return <h1 className="text-red-700"></h1>;
}
