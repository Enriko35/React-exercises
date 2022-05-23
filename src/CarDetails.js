import React, { useEffect, useRef } from "react";

const CarDetails = ({ initialData }) => {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.reset();
  }, [initialData]);

  return (
    <div>
      <form ref={formRef}>
        <input
          defaultValue={initialData.model}
          name="model"
          placeholder="Model"
        ></input>
        <input
          defaultValue={initialData.year}
          name="year"
          placeholder="Year"
        ></input>
        <input
          defaultValue={initialData.color}
          name="color"
          placeholder="Color"
        ></input>
        <button type="submit">Invio</button>
      </form>
    </div>
  );
};

export default CarDetails;
