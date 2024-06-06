import { flow, types } from "mobx-state-tree";

import client from "../utils/apolloClient";
import { gql } from "@apollo/client";

const Car = types.model("Car", {
  id: types.identifier,
  make: types.string,
  model: types.string,
  year: types.number,
});

const mockCars = [
  { id: "1", make: "Tesla", model: "Model S", year: 2021 },
  { id: "2", make: "BMW", model: "i8", year: 2020 },
  { id: "3", make: "Audi", model: "e-tron", year: 2019 },
];

const CarStore = types
  .model("CarStore", {
    cars: types.array(Car),
  })
  .actions((self) => ({
    fetchCars: flow(function* () {
      if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
        // Use MobX-State-Tree's built-in methods to handle state updates
        self.cars.clear();
        self.cars.push(...mockCars.map((car) => Car.create(car)));
      } else {
        const query = gql`
          query {
            cars {
              id
              make
              model
              year
            }
          }
        `;
        try {
          const response = yield client.query({ query });
          self.cars.clear();
          self.cars.push(
            ...response.data.cars.map((car: any) => Car.create(car))
          );
        } catch (error) {
          console.error("Failed to fetch cars", error);
        }
      }
    }),
  }));

const store = CarStore.create({ cars: [] });

export default store;
