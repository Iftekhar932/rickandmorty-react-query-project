import React from "react";

const Character = ({ character }) => {
  const { image, name, location, status, species } = character;
  return (
    <div className="border-2 border-red-800 text-white bg-gray-800 justify-self-center p-6 font-bold ">
      <img src={image} alt={`Character name ${name}`} />
      <div className="py-2">
        <h3>Name:- {name}</h3>
        <p>Status:- {status}</p>
        <p>Species:- {species}</p>
        <p>
          Last seen on <br />
          {location.name}
        </p>
      </div>
    </div>
  );
};

export default Character;
