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
    <div className="characters">
      {data.results.map((character) => (
        <Character character={character} key={character.id} />
      ))}
      <div>
        <button onClick={() => setPage((old) => old - 1)} disabled={page === 1}>
          Previous
        </button>

        <button
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

/* import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Character from "../Character/Character";

const Characters = () => {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, isError, isLoading, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="characters">
      {data.results.map((character) => (
        <Character character={character} key={character.id} />
      ))}
      <div className="buttons">
        <button
          onClick={() => {
            setPage((old) => old - 1);
          }}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => {
            setPage((old) => old + 1);
          }}
          disabled={data.info.next === null && isPreviousData}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
*/
