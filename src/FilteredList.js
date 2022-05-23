import React, { useState, useMemo } from "react";

const FilteredList = () => {
  const [utente] = useState([
    {
      id: 1,
      name: "Simona",
      age: 13,
    },
    {
      id: 2,
      name: "Eik",
      age: 37,
    },
    {
      id: 3,
      name: "Carmelo",
      age: 28,
    },
  ]);

  const handleMaxAge = useMemo(() => {
    return utente.filter((item) => item.age < 18);
  }, [utente]);

  return (
    <>
      <div>
        {handleMaxAge.map((item) => {
          return (
            <div>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.age}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilteredList;
