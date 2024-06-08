import { flow, types } from "mobx-state-tree";

import client from "../utils/apolloClient";
import { gql } from "@apollo/client";

export interface IJob {
  id: number;
  title: string;
  company: string;
  description: string;
}

// TODO: is there a way to setup that the model somehow uses typecript types
const Job = types.model("Job", {
  id: types.identifierNumber,
  title: types.string,
  company: types.string,
  description: types.string,
});

const mockJobs: IJob[] = [
  {
    id: 1,
    title: "React Developer",
    company: "Amazon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Senior QA",
    company: "CNN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "physicist",
    company: "Tesla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    title: "Drill Sergeant",
    company: "Apple",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const JobStore = types
  .model("JobStore", {
    jobs: types.array(Job),
  })
  .actions((self) => ({
    fetchJobs: flow(function* () {
      if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
        // Use MobX-State-Tree's built-in methods to handle state updates
        self.jobs.clear();
        self.jobs.push(...mockJobs.map((job) => Job.create(job)));
      } else {
        const query = gql`
          query {
            jobs {
              id
              title
              company
              description
            }
          }
        `;
        try {
          const response = yield client.query({ query });
          self.jobs.clear();
          self.jobs.push(
            ...response.data.jbos.map((job: any) => Job.create(job))
          );
        } catch (error) {
          console.error("Failed to fetch jobs", error);
        }
      }
    }),
  }));

const store = JobStore.create({ jobs: [] });

export default store;
