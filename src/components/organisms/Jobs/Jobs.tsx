"use client";

import jobStore, { IJob } from "../../../app/stores/JobStore";
import { useEffect, useState } from "react";

import Heading from "../../atoms/Heading/Heading";
import Tags from "./Tags/Tags";
import { observer } from "mobx-react-lite";

const Jobs = observer(() => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    jobStore.fetchJobs();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobStore.jobs?.filter((job: IJob) => {
    const matchesTitle = job.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCompany = job.company
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDescription = job.description
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTags =
      job.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      ) || false;

    return matchesTitle || matchesCompany || matchesDescription || matchesTags;
  });

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search jobs..."
      />
      {filteredJobs?.map((job: IJob) => (
        <div key={job.id} className="py-4 border-b border-gray-200">
          <Heading variant="h2">{job.title}</Heading>
          <Heading variant="h3">{job.company}</Heading>
          <p>{job.description}</p>
          <Tags tags={job?.tags} />
        </div>
      ))}
    </div>
  );
});
export default Jobs;
