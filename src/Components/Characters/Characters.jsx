import { useState } from "react";
import { useQuery } from "react-query";
import Character from "../Character/Character";

const Characters = () => {
  const [page, setPage] = useState(1);

  const charactersFetcher = async ({ queryKey }, kobe) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, isError, isLoading, isPreviousData } = useQuery(
    ["character", page],
    charactersFetcher,
    { keepPreviousData: true }
  );

  if (isError) {
    return <div>🧧🧧🧧🧧ERROR🧧🧧🧧🧧</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full w-full bg-slate-900 pb-2 place-content-center">
      <h1>Info about Rick & Morty Characters</h1>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 p-4 gap-8 sm:gap-6">
        {data.results.map((character) => (
          <Character character={character} key={character.id} />
        ))}
      </div>

      <div className="flex justify-center m-2">
        <button
          className="bg-gray-500 text-white px-4 py-2"
          onClick={() => setPage((old) => old - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        <button
          className="bg-gray-500 text-white px-4 py-2"
          onClick={() => setPage((old) => old + 1)}
          disabled={isPreviousData || data.info.next === null}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
