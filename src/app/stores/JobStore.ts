import { flow, types } from "mobx-state-tree";

import client from "../utils/apolloClient";
import { gql } from "@apollo/client";
import { jobs } from "../mocks/jobs";

export interface IJob {
  id: number;
  title: string;
  company: string;
  description: string;
  tags?: string[];
}

const Job = types.model("Job", {
  id: types.identifierNumber,
  title: types.string,
  company: types.string,
  description: types.string,
  tags: types.array(types.string),
});

const JobStore = types
  .model("JobStore", {
    jobs: types.array(Job),
  })
  .actions((self) => ({
    fetchJobs: flow(function* () {
      if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "true") {
        self.jobs.clear();
        self.jobs.push(...jobs.map((job) => Job.create(job)));
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
