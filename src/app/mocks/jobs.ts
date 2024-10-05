import { IJob } from "../stores/JobStore";

export const jobs: IJob[] = [
  {
    id: 1,
    title: "React Engineer",
    company: "Amazon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["programmer", "it", "agile", "software engineer"],
  },
  {
    id: 2,
    title: "Senior QA",
    company: "CNN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["it", "agile", "senior"],
  },
  {
    id: 3,
    title: "Senior Physicist",
    company: "Tesla",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["science", "space", "senior"],
  },
  {
    id: 4,
    title: "Astronaut",
    company: "SpaceX",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["moonwalking", "fitness"],
  },
  {
    id: 5,
    title: "Science Teacher",
    company: "SpaceX",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["science", "teaching", "high school"],
  },
];
