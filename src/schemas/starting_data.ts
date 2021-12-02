import { JobPostDAO, ApplicationDAO, JobPostAppDAO } from "./modelDAO";

export const jobpostsData: JobPostDAO[] = [
  {
    title: "devops",
    description: "kubernetes",
    location: "Toronto",
    hourlyPayRate: 40,
  },
  {
    title: "software engineer",
    description: "docker, spring boot",
    location: "Toronto",
    hourlyPayRate: 50,
  },
];

export const applicationsData: ApplicationDAO[] = [
  {
    name: "George",
    currentJob: "software engineer",
    location: "Toronto",
  },
];

export const jobpostsappData: JobPostAppDAO[] = [
  {
    jobposts_id: 1,
    applications_id: 1,
  },
];

export const startingDataMap = (array: any[]) => {
  array.map((jobpost) => jobpost);
};
