"use client";

import carStore from "../app/stores/CarStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const CarList = observer(() => {
  useEffect(() => {
    carStore.fetchCars();
  }, []);

  return (
    <div>
      {carStore.cars.map((car) => (
        <div key={car.id} className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">
            {car.make} {car.model}
          </h2>
          <p className="text-gray-600">Year: {car.year}</p>
        </div>
      ))}
    </div>
  );
});

export default CarList;
