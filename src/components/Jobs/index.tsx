"use client";

import jobStore, { IJob } from "../../app/stores/JobStore";

import Heading from "../Heading";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const Jobs = observer(() => {
  // #TODO: use IJob interface
  let jobs: any;

  useEffect(() => {
    jobStore.fetchJobs();
  }, []);

  useEffect(() => {
    if (jobStore?.jobs) {
      console.log(jobStore.jobs);
      jobs = [...jobStore.jobs];
      console.log(8);
    }
  }, [jobStore]);

  return (
    <div>
      {/* #TODO: remove any */}
      {JSON.stringify(jobStore.jobs)}
      <br />
      <br />
      <br />({JSON.stringify(jobs)})
      {jobs?.map((job: any) => (
        <div key={job.id} className="p-4 border-b border-gray-200">
          <Heading variant="h2">{job.title}</Heading>
          <Heading variant="h3">{job.company}</Heading>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
});

export default Jobs;
